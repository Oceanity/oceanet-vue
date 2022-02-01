<template>
  <div id="backdrop">
    <div class="bubbles" id="bubbles0"></div>
    <div class="bubbles" id="bubbles1"></div>
    <div class="bubbles" id="bubbles2"></div>
    <div class="bubbles" id="bubbles3"></div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

/**
 * Animated Site backdrop
 * @displayName Backdrop
 */
@Options({})
export default class Backdrop extends Vue {}
</script>

<style lang="scss">
#backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200vh;
}
#bubbles2,
#bubbles3 {
  z-index: 2;
  opacity: 0.15;
}
#bubbles2 {
  background: url("../assets/bubbles-2.png");
  animation: bubbles 10s linear 0s infinite;
}
#bubbles3 {
  background: url("../assets/bubbles-3.png");
  animation: bubbles 12s linear 0s infinite;
}
@keyframes bubbles {
  0% {
    left: 20px;
    top: 0;
  }
  33% {
    left: 30px;
  }
  50% {
    left: 20px;
  }
  66% {
    left: 0px;
  }
  100% {
    left: 20px;
    top: -720px;
  }
}
@media screen and (min-width: 641px) {
  #bubbles0,
  #bubbles1 {
    z-index: 2;
    opacity: 0.2;
  }
  #bubbles0 {
    background: url("../assets/bubbles-0.png");
    animation: bubbles 45s linear 0s infinite;
  }
  #bubbles1 {
    background: url("../assets/bubbles-1.png");
    animation: bubbles 35s linear 0s infinite;
  }
}
@media screen and (max-width: 640px) {
  #bubbles0,
  #bubbles1 {
    display: none;
  }
}
</style>
