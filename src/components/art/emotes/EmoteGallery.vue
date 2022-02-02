<template>
  <div class="emote-gallery box">
    <h3>{{ displayName }}</h3>
    <ul class="emote-list">
      <li v-for="emote in emotes" :key="emote">
        <a @click="showModal(emote)">
          <img :src="require(`../../../assets/art/emotes/${displayName}/${emote}.png`)" :alt="prefix + emote" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

/**
 * Gallery of Twitch Emotes
 * @displayName EmoteGallery
 */
@Options({
  props: ["channelInfo"],
  data() {
    return {
      themes: ["light", "light-event", "dark", "dark-event"],
      displayName: this.channelInfo.name || "Oceanibot",
      prefix: this.channelInfo.prefix || "null",
      emotes: this.channelInfo.emotes || [],
    };
  },
  methods: {
    showModal(emote) {
      this.$emit("showModal", { channel: this.displayName, prefix: this.prefix, name: emote });
    },
  },
})
export default class EmoteGallery extends Vue {}
</script>

<style lang="scss">
.emote-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  li {
    position: relative;
    margin: 5px;
    border-radius: 10px;
    padding: 5px;
    list-style-type: none;
    z-index: 2;
    overflow: hidden;
    text-align: center;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #dadaff;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.1s linear;
    }

    &:hover:after {
      opacity: 0.5;
    }
  }
}
</style>
