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
/**
 * Gallery of Twitch Emotes
 * @displayName EmoteGallery
 */
export default {
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
};
</script>

<style lang="scss">
.emote-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  li {
    padding: 5px;
    list-style-type: none;
  }
}
</style>
