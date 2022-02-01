<template>
  <div class="box padded">
    <h1>Emote Commissions</h1>
    <p>Want emotes for your Twitch Channel? I am happy to help! Currently, my prices are $20 (USD) per emote, and if you order 3, you only have to pay $50 (USD)!</p>
    <p>Below are emotes I've made for my own channel, plus emotes I've been commissioned in the past! You can mouse over the emotes to see the higher resolution versions.</p>
  </div>
  <EmoteGallery v-for="channel in channels" :key="channel.name" :channelInfo="channel" @showModal="showModal" />
  <teleport to="#modals">
    <EmoteModal :emote="emote" v-if="modalVisible" @hideModal="hideModal" />
  </teleport>
</template>

<script>
import emoteData from "../../json/emotes.json";
import EmoteGallery from "../../components/art/emotes/EmoteGallery.vue";
import EmoteModal from "../../components/art/emotes/EmoteModal.vue";

export default {
  data() {
    return {
      channels: emoteData.channels,
      emote: null,
      modalVisible: false,
    };
  },
  components: {
    EmoteGallery,
    EmoteModal,
  },
  methods: {
    showModal(e) {
      this.emote = e;
      this.modalVisible = true;
      document.documentElement.classList.add("no-scroll");
    },
    hideModal(e) {
      this.modalVisible = false;
      document.documentElement.classList.remove("no-scroll");
    },
  },
};
</script>

<style>
</style>
