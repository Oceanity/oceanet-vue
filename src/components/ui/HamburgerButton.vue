<template>
  <div class="hamburger-button">
    <a @click="toggleMenu">
      <svg height="32" style="enable-background: new 0 0 32 32" width="32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
      </svg>
    </a>
  </div>
</template>

<script>
/**
 * Hamburger Button for Menu
 * @displayName HamburgerButton
 * @event menuToggle - event fired when user clicks button
 */
export default {
  emits: ["toggleMenu"],
  data() {
    return {
      state: false,
    };
  },
  // Functions
  methods: {
    toggleMenu() {
      this.state = !this.state;
      this.$emit("toggleMenu", this.state);
    },
  },
};
</script>

<style lang="scss">
.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
}
</style>
