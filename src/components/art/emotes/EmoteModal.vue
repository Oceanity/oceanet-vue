<template>
  <div class="emote-modal" @click.self="hideModal">
    <div class="emote-pane box">
      <h3>{{ emote.prefix + emote.name }}</h3>
      <h4>Sizes</h4>
      <div class="sizes">
        <div class="size" v-for="size in sizes" :key="size" :class="size">
          <img :src="src" :alt="size" />
        </div>
      </div>
      <div class="chat-previews">
        <h4>Chat Preview</h4>
        <div class="chat-row" v-for="theme in themes" :key="theme" :class="theme.replace('-', ' ')">
          <div class="wrap">
            <span class="username">Oceanibot</span>
            <span class="dots">:</span>
            <span class="text"><img :src="src" :alt="size" /><img :src="src" :alt="size" /> Lorem, ipsum dolor. <img :src="src" :alt="size" /><img :src="src" :alt="size" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

/**
 * Modal showcasing a specific Emote
 * @displayName EmoteModal
 */
@Options({
  // Data
  props: ["emote"],
  data() {
    return {
      sizes: ["x1", "x2", "x3"],
      themes: ["light", "light-event", "dark", "dark-event"],
      src: null,
    };
  },
  // Functions
  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
  },
  // Lifecycle
  mounted() {
    console.log(this.emote);
    this.src = require(`../../../assets/art/emotes/${this.emote.channel}/${this.emote.name}.png`);
  },
})
export default class EmoteModal extends Vue {}
</script>

<style lang="scss">
.emote-modal {
  --accent: rgb(230, 84, 84);

  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  z-index: 999;
  background: rgba(0, 0, 50, 0.8);
  justify-content: center;
  text-align: center;

  .emote-pane {
    flex: 0 1 auto;
    margin: auto;
    width: 100%;
    max-width: 500px;

    h3 {
      user-select: none;
    }

    .sizes {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .size {
        display: flex;
        flex-direction: column;
        flex: 0;
        justify-content: center;
        padding: 10px;
      }

      .x1 img {
        width: 28px;
        height: 28px;
      }

      .x2 img {
        width: 56px;
        height: 56px;
      }

      .x3 img {
        width: 112px;
        height: 112px;
      }
    }

    .chat-previews {
      .chat-row {
        padding: 6px 0;
        text-align: left;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 12px;
        text-shadow: none;

        .wrap {
          padding: 6px 6px 6px 20px;

          .username {
            margin: 0 1px;
            font-weight: 700;
            color: var(--accent);
          }

          .dots {
            margin-right: 10px;
          }

          .text {
            img {
              margin: -8px 4px;
              width: 28px;
              height: 28px;
            }
          }
        }

        &.event .wrap {
          padding-left: 17px;
          border-left: 3px solid var(--accent);
        }
      }

      .light {
        color: #000;
        background: #fff;
      }
      .light.event {
        background: #f7f7f8;
      }
      .dark {
        background: #18181b;
      }
      .dark.event {
        background: #1f1f23;
      }
    }
  }
}
</style>
