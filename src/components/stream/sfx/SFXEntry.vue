<template>
  <div class="sfx-entry box">
    <a :name="link" />
    <h3>{{ title }}</h3>
    <BackToTopButton />
    <ul v-show="!isCollapsed">
      <slot><li>No sounds loaded</li></slot>
    </ul>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import BackToTopButton from "../../ui/BackToTopButton.vue";

/**
 * Entry of SFX Commands
 * @displayName SFXEntry
 */
@Options({
  props: ["entry", "name", "prefix"],
  inject: ["scrollToTop", "toSlug"],
  data() {
    return {
      title: this.name,
      link: `${this.toSlug(this.name, this.prefix)}`,
      isCollapsed: false,
    };
  },
  components: {
    BackToTopButton,
  },
})
export default class SFXEntry extends Vue {}
</script>

<style lang="scss">
.sfx-entry {
  .back-to-top {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
