<template>
  <Header />
  <main>
    <router-view />
  </main>
  <!--<StreamEmbed :class="{ fullsize: currentRouteName === 'Stream' }" />-->
  <Backdrop />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import "@a/global.scss";
import Lightbox from "@c/Lightbox.vue";
import Header from "@c/Header.vue";
import StreamEmbed from "@c/stream/StreamEmbed.vue";
import Backdrop from "@c/Backdrop.vue";

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
      scrollToY(y) {
        animScrollTo(y, 500);
      },
      toSlug(str, prefix) {
        return (prefix ? prefix : "") + str.replace(/[^\w\d]/gi, "");
      },
    };
  },
  components: {
    Lightbox,
    Header,
    StreamEmbed,
    Backdrop,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
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
