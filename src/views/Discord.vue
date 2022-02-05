<template>
  <div class="box padded">
    <h1>
      Discord<span v-show="name != ''"> - {{ name }}</span>
    </h1>
    <p>Want updates on my stream and a friendly community to chat with? <a href="http://discord.oceanity.net/" target="_blank">Join my Discord here!</a></p>
    <p>We have tons of server events including VR Chat Hangouts and Watch Parties!</p>
  </div>
  <DiscordMemberList serverID="84781949679329280" />
</template>

<script>
import DiscordMemberList from "../components/stream/discord/DiscordMemberList.vue";

export default {
  data() {
    return {
      discordData: null,
      members: [],
      name: "",
      count: -1,
    };
  },
  components: {
    DiscordMemberList,
  },
};
</script>

<style lang="scss">
</style>
