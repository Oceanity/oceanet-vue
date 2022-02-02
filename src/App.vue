<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Backdrop />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import "./assets/global.scss";
import Header from "./components/Header.vue";
import Backdrop from "./components/Backdrop.vue";

/**
 * App Entrypoint
 * @displayName App
 */
@Options({
  setup() {},
  provide() {
    return {
      scrollToTop() {
        animScrollTo(0, 500);
      },
    };
  },
  components: {
    Header,
    Backdrop,
  },
  watch: {
    $route(to, from) {
      document.title = to.meta.title || "Oceanity";
    },
  },
})
export default class App extends Vue {}

// Animate scrollTo
function animScrollTo(y, duration) {
  // Grab current position and time and calculate length
  var curY = window.scrollY,
    baseY = (curY + y) * 0.5,
    difference = curY - baseY,
    startTime = performance.now();

  // Scroll time elapsed / duration each step
  function step() {
    var normalizedTime = (performance.now() - startTime) / duration;
    if (normalizedTime > 1) normalizedTime = 1;

    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
    if (normalizedTime < 1) window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}
</script>

<style lang="scss">
main {
  position: relative;
  padding: 120px 20px 20px;
  z-index: 2;
  transition: padding 0.1s linear;
}

@media screen and (max-width: 640px) {
  main {
    padding: 70px 20px 20px;
  }
}
</style>
