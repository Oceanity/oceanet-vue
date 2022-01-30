<template>
  <div id="backdrop">
    <div class="bubbles" id="bubbles0"></div>
    <div class="bubbles" id="bubbles1"></div>
    <div class="bubbles" id="bubbles2"></div>
    <div class="bubbles" id="bubbles3"></div>
  </div>
</template>

<script>
export default {};
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
  width: 100%;
  height: 200%;
}
#bubbles2,
#bubbles3 {
  z-index: 2;
  opacity: 0.15;
  filter: blur(2px);
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
    background-position-x: 20px;
    background-position-y: 720px;
  }
  33% {
    background-position-x: 30px;
  }
  50% {
    background-position-x: 20px;
  }
  66% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 20px;
    background-position-y: 0px;
  }
}
@media screen and (min-width: 641px) {
  #bubbles0,
  #bubbles1 {
    z-index: 2;
    opacity: 0.2;
    filter: blur(1px);
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
