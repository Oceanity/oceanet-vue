<template>
  <li class="sfx-command">
    <span class="command-tag" @click="copyCommand">!{{ tag }}</span>
    <span class="command-text" v-html="formatText(text)" />
  </li>
</template>

<script>
import { Options, Vue } from "vue-class-component";

/**
 * Single SFX Command
 * @displayName SFXCommand
 */
@Options({
  props: ["tag", "text"],
  data() {
    return {};
  },
  methods: {
    copyCommand() {
      navigator.clipboard.writeText(`!${this.tag}`);
    },
    formatText(text) {
      return text.replace(/\{([^\}]+)\}/gi, "<span class='actor'>[$1]</span>");
    },
  },
})
export default class SFXCommand extends Vue {}
</script>

<style lang="scss">
.sfx-command {
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  list-style-type: none;
  font-family: sans-serif;
  font-stretch: condensed;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: none;

  &:nth-of-type(even) {
    background: rgba(0, 0, 50, 0.05);
  }

  .command-tag {
    display: inline-block;
    margin: 0 10px 0 0;
    padding: 4px;
    font-family: "Consolas", monospace;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    color: aqua;
    background: rgba(0, 0, 50, 0.7);
    cursor: pointer;
    &:hover {
      background: rgba(50, 50, 100, 0.7);
    }
  }
  .command-text {
    margin: 0;
    line-height: 30px;
    word-break: break-word;
    .actor {
      margin-right: 2px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}
@media screen and (max-width: 640px) {
  .sfx-command {
    padding: 10px;
    flex-direction: column;
    .command-tag {
      margin: 0;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      flex: 0;
      font-size: 18px;
    }
  }
}
</style>
