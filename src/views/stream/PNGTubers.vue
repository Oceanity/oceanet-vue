<template>
  <div class="box padded">
    <h1>PNGTuber Generator</h1>
    <p>This generator will quickly create Custom CSS for responsive PNGTuber Browser Sources for OBS.</p>
  </div>
  <div id="pngtuber-wrapper">
    <div id="pngtuber-form" class="box">
      <h3>Input</h3>
      <div class="padded">
        <label for="discord-id">
          <span>Discord ID</span>
          <input id="discord-id" type="text" v-model="discordID" placeholder="Discord ID" :class="{ valid: discordIDMatch }" @input="validateForm" />
        </label>
        <label for="closed-frame">
          <span>Closed Frame</span>
          <input id="closed-frame" type="text" v-model="closedFrame" placeholder="Closed Frame Image URL" :class="{ valid: closedFrameMatch }" @input="validateForm" />
        </label>
        <label for="speaking-frame">
          <span>Speaking Frame</span>
          <input id="speaking-frame" type="text" v-model="speakingFrame" placeholder="Speaking Frame Image URL" :class="{ valid: speakingFrameMatch }" @input="validateForm" />
        </label>
        <label for="bounce-anim"> <input type="checkbox" v-model="bounceAnim" /> Bounce </label>
        <label for="dim-anim"> <input type="checkbox" v-model="dimAnim" /> Dim </label>
      </div>
    </div>
    <div v-if="formValid" id="pngtuber-results" class="box">
      <h3>Output</h3>

      <div class="padded" id="pngtuber-results-row">
        <div class="preview" :class="{ dim: dimAnim, bounce: bounceAnim }">
          <h3>Preview (hover)</h3>
          <span>
            <img class="closed" :src="closedFrame" width="1024" />
            <img class="speaking" :src="speakingFrame" />
          </span>
        </div>
        <div class="css">
          <h3>CSS</h3>
          <pre id="css-pane">{{ hideCSS.replace("#discordID", discordID) }}{{ rootCSS.replace("#closedFrame", closedFrame).replace("#speakingFrame", speakingFrame) }}{{ bodyCSS }}{{ avatarCSS }}{{ speakingCSS }}{{ bounceAnim ? speakingBounceCSS : "" }}{{ voiceStatesCSS }}{{ voiceStateCSS }}{{ nameplateCSS }}{{ dimAnim ? dimCSS : "" }}{{ bounceAnim ? animationCSS : "" }}</pre>
          <div class="buttons">
            <button @click="copyToClipboard">Copy to Clipboard</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const httpReg = new RegExp(/.+:\/\/.+\..+\/.+/);
const idReg = new RegExp(/^\d+$/);
const im = " !important";

export default {
  data() {
    return {
      // css
      hideCSS: "li.voice-state:not([data-reactid*='#discordID']) { display:none; }\n\n",
      rootCSS: ":root {\n  --closed-image: url(#closedFrame);\n  --speaking-image: url(#speakingFrame);\n}\n\n",
      bodyCSS: "body {\n  background-color: rgba(0,0,0,0);\n  margin: 0 auto;\n  overflow: hidden\n}\n\n",
      avatarCSS: `.avatar {\n  content: var(--closed-image);\n  margin: 0${im};\n  padding: 0${im};\n  width: auto${im};\n  height: auto${im};\n  max-width: 100%${im};\n  max-height: 100%${im};\n  object-fit: contain;\n  border-radius:0${im};\n}\n\n`,
      speakingCSS: `.speaking {\n  content: var(--speaking-image);\n  border-color: transparent${im};\n  position: relative;\n}\n\n`,
      speakingBounceCSS: `.speaking {\n  animation-name: speak-now;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards\n}\n\n`,
      voiceStatesCSS: `ul.voice-states {\n  margin: 0${im};\n  padding: 0${im};\n}\n\n`,
      voiceStateCSS: `li.voice-state {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  flex: 1;\n  position: relative${im};\n  width: 100vw${im};\n  height:100vh${im};\n  margin-top: 15px${im};\n}\n\n`,
      nameplateCSS: "div.user {\n  display: none;\n}\n\n",
      dimCSS: ".avatar { filter: brightness(50%); }\n.speaking { filter: brightness(100%); }\n\n",
      animationCSS: "@keyframes speak-now {\n  0% { bottom: 0px; }\n  50% { bottom: 10px; }\n  100% { bottom: 0px; }\n}",

      // variables
      discordID: "",
      closedFrame: "",
      speakingFrame: "",
      discordIDMatch: null,
      closedFrameMatch: null,
      speakingFrameMatch: null,
      formValid: false,
      bounceAnim: true,
      dimAnim: false,
    };
  },
  methods: {
    validateForm() {
      console.log("validating");
      this.discordIDMatch = idReg.exec(this.discordID);
      this.closedFrameMatch = httpReg.exec(this.closedFrame);
      this.speakingFrameMatch = httpReg.exec(this.speakingFrame);
      this.formValid = this.discordIDMatch && this.closedFrameMatch && this.speakingFrameMatch;
    },
    copyToClipboard() {
      const cssPane = document.getElementById("css-pane");
      navigator.clipboard.writeText(cssPane.innerText);
    },
  },
};
</script>

<style lang="scss">
#pngtuber-wrapper {
  display: flex;
  #pngtuber-form {
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    label {
      display: flex;
      flex: 1 1 100%;
      flex-direction: column;
      margin: 0 0 10px;
    }
  }
  #pngtuber-results {
    margin-left: 20px;
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
    .css {
      max-width: 100%;
      flex: 1 1 300px;
      overflow: hidden;

      pre {
        display: flex;
        flex: 0 1 100%;
        padding: 10px;
        max-height: 200px;
        overflow-y: scroll;
        overflow-x: hidden;
        font-size: 14px;
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
