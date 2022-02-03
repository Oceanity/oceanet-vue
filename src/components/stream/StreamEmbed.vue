<template>
  <!-- Twitch Channel Embedded-->
  <div class="twitch-wrapper">
    <!-- Add a placeholder for the Twitch embed -->
    <div id="twitch-embed"></div>

    <!-- More Embed Options: https://dev.twitch.tv/docs/embed/ -->
  </div>
</template>

<script>
export default {
  // Lifecycle
  mounted() {
    let twitchScript = document.createElement("script");
    twitchScript.setAttribute("src", "https://embed.twitch.tv/embed/v1.js");
    twitchScript.onload = function () {
      new Twitch.Embed("twitch-embed", {
        channel: "weirdromance",
        muted: true,
        layout: "video",
      });
    };
    document.head.appendChild(twitchScript);
  },
};
</script>

<style lang="scss">
.twitch-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  height: 180px;
  z-index: 20;

  #twitch-embed {
    position: relative;
    width: 100%;
    height: 100%;
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;

      div[data-a-target="embed-chat-container"] {
        display: none;
      }
    }
  }
}
</style>
