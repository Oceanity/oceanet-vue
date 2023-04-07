<template>
  <div class="box padded">
    <h1>PNGTuber Generator</h1>
    <p>This generator will quickly create Custom CSS for responsive PNGTuber Browser Sources for OBS.</p>
    <p><strong>UPDATE 2/2/2023:</strong> Now works with the new Discord StreamKit CSS</p>
  </div>
  <div id="pngtuber-wrapper">
    <div id="pngtuber-form" class="box">
      <h3>Input</h3>
      <div class="padded">
        <label for="discord-id">
          <span>Discord ID</span>
          <input id="discord-id" type="text" v-model="options.discordID" placeholder="Discord ID" :class="{ valid: valid.discordId }" @input="validateForm" />
        </label>
        <label for="closed-frame">
          <span>Closed Frame</span>
          <input id="closed-frame" type="text" v-model="options.inactiveImage" placeholder="Closed Frame Image URL" :class="{ valid: valid.inactiveImage }" @input="validateForm" />
        </label>
        <label for="speaking-frame">
          <span>Speaking Frame</span>
          <input id="speaking-frame" type="text" v-model="options.speakingImage" placeholder="Speaking Frame Image URL" :class="{ valid: valid.speakingImage }" @input="validateForm" />
        </label>
        <label class="checkbox" for="bounce-anim"> <input id="bounce-anim" type="checkbox" v-model="options.bounce" @change="update" /> Bounce </label>
        <label class="checkbox" for="dim-anim"> <input id="dim-anim" type="checkbox" v-model="options.dim" @change="update" /> Dim </label>
      </div>
    </div>
    <div v-if="formValid" id="pngtuber-results" class="box">
      <h3>Output</h3>

      <div class="padded" id="pngtuber-results-row">
        <div class="preview" :class="{ dim: options.dim, bounce: options.bounce }">
          <h3>Preview (hover)</h3>
          <span>
            <img class="closed" :src="options.inactiveImage" width="1024" />
            <img class="speaking" :src="options.speakingImage" />
          </span>
        </div>
        <div id="css-column">
          <h3>CSS</h3>
          <p id="css-pane">{{ outputCSS }}</p>
          <div class="buttons">
            <button @click="copyToClipboard">Copy to Clipboard</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

const httpReg = new RegExp(/.+:\/\/.+\..+\/.+/);
const idReg = new RegExp(/^\d+$/);
const im = " !important";

export default class extends Vue {
  options = {
    discordId: 0,
    inactiveImage: "",
    speakingImage: "",
    bounce: false,
    dim: false,
  };

  valid = {
    discordId: false,
    inactiveImage: false,
    speakingImage: false,
  };

  // css
  hideCSS = "li :not(img[src*='#discordID']) { display:none; }\n\n";
  rootCSS = ":root {\n  --closed-image: url(#closedFrame);\n  --speaking-image: url(#speakingFrame);\n}\n\n";
  bodyCSS = "body {\n  background-color: rgba(0,0,0,0);\n  margin: 0 auto;\n  overflow: hidden\n}\n\n";
  voiceStatesCSS = `ul {\n  margin: 0;\n  padding: 0${im};\n}\n\nli {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100vw;\n  height: 100vh${im};\n  margin-top: 15px${im};\n}\n\n`;
  nameplateCSS = "div[class^'=Voice_user'] {\n  display: none;\n}\n\n";
  dimCSS = ".avatar { filter: brightness(50%); }\n.speaking { filter: brightness(100%); }\n\n";
  animationCSS = "@keyframes speak-now {\n  0% { bottom: 0px; }\n  50% { bottom: 10px; }\n  100% { bottom: 0px; }\n}";

  discordIDMatch = false;
  closedFrameMatch = false;
  speakingFrameMatch = false;
  formValid = false;

  outputCSS = "";

  update() {
    console.log(`Updating, Dim: ${this.options.dim}, Bounce: ${this.options.bounce}`);
    this.outputCSS = this.genOutputCSS();
  }

  validateForm() {
    console.log("validating");
    this.valid.discordId = idReg.exec(this.options.discordId);
    this.valid.inactiveImage = httpReg.exec(this.options.inactiveImage);
    this.valid.speakingImage = httpReg.exec(this.options.speakingImage);
    this.formValid = this.valid.discordId && this.valid.inactiveImage && this.valid.speakingImage;
    this.update();
  }

  copyToClipboard() {
    const cssPane = document.getElementById("css-pane");
    navigator.clipboard.writeText(cssPane.innerText);
  }

  liCSS = () => `li {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100vw;\n  height: 100vh${im};\n  margin-top: ${this.options.bounce ? "15" : "0"}px${im};\n}\n\n`;
  idleCSS = () => `/* Idle CSS */\nimg[class^='Voice_avatar'] {\n  content: var(--closed-image);\n  margin: 0;\n  border: 0;\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  border-radius:0;\n${this.options.dim ? "  filter: brightness(50%);\n" : ""}}\n\n`;
  speakingCSS = () => `img[class*='Voice_avatarSpeaking'] {\n  content: var(--speaking-image);\n  border-color: transparent${im};\n  position: relative;\n${this.options.bounce ? "  animation-name: speak-now;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n" : ""}${this.options.dim ? "  filter: brightness(100%);\n" : ""}}\n\n`;

  genOutputCSS = () => `${this.hideCSS.replace("#discordID", this.options.discordID)}${this.rootCSS.replace("#closedFrame", this.options.inactiveImage).replace("#speakingFrame", this.options.speakingImage)}${this.bodyCSS}${this.idleCSS(this.options.dim)}${this.speakingCSS(this.bouncing)}${this.voiceStatesCSS}${this.nameplateCSS}${this.options.bounce ? this.animationCSS : ""}`.trim();
}
</script>

<style lang="scss">
#pngtuber-wrapper {
  display: flex;
  gap: 20px;

  #pngtuber-form {
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    label {
      display: flex;
      flex: 1 1 100%;
      flex-direction: column;
      margin: 0 0 10px;
      user-select: none;
      color: #eee;

      &.checkbox {
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        input[type="checkbox"] {
          margin: 4px 4px 4px 0;
          flex-basis: 20px;
          cursor: pointer;
        }
      }
    }
  }
  #pngtuber-results {
    flex: 1 1 50%;
    #pngtuber-results-row {
      display: flex;
    }
    .preview {
      flex: 0 0 300px;
      span {
        display: inline-block;
        max-width: 300px;
        height: 300px;
        overflow: hidden;
      }

      img {
        margin-top: 15px;
      }
      &.dim .closed {
        filter: brightness(0.5);
      }
      .speaking {
        position: relative;
        display: none;
        animation: none;
      }

      &.bounce span:hover .speaking {
        animation: speak 0.3s linear;
      }

      span:hover {
        .closed {
          display: none;
        }
        .speaking {
          display: block;
        }
      }
    }
    #css-column {
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1 0 0;
      overflow: hidden;

      h3 {
        margin: 0;
      }

      p {
        display: block;
        flex: 1 0 0;
        margin: 0;
        white-space: pre;
        font-family: monospace;
        font-size: 10px;
        min-width: 0;
        padding: 10px;
        overflow: auto;
        background: rgba(0, 0, 50, 0.5);
      }
    }
  }
}
@keyframes speak {
  0% {
    bottom: 0px;
  }
  50% {
    bottom: 10px;
  }
  100% {
    bottom: 0px;
  }
}
</style>
