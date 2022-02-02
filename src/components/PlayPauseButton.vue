<template>
  <div class="play-pause-button">
    <!-- Play Button -->
    <a v-if="playOn" @click="$emit('play')">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" />
      </svg>
    </a>
    <!-- Pause Button -->
    <a v-else @click="$emit('pause')">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 7H8V17H11V7Z" />
        <path d="M13 17H16V7H13V17Z" />
      </svg>
    </a>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

/**
 * Vector Icon Play/Pause Button
 * @displayName PlayPauseButton
 */
@Options({
  props: ["playOn"],
  emits: ["play", "pause"],
})
export default class PlayPauseButton extends Vue {}
</script>

<style lang="scss">
.play-pause-button {
  display: flex;
  width: 48px;
  height: 48px;

  svg {
    width: 48px;
    height: 48px;
  }
}
</style>
