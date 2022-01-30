<template>
  <div class="sfx-entry">
    <a :name="link" />
    <h3>{{ title }}</h3>
    <button @click="scrollToTop">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8285 11.9481L16.2427 10.5339L12 6.29122L7.7574 10.5339L9.17161 11.9481L11 10.1196V17.6568H13V10.1196L14.8285 11.9481Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7782 4.22183C15.4824 -0.0739415 8.51759 -0.0739422 4.22183 4.22183C-0.0739415 8.51759 -0.0739422 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604Z" />
      </svg>
    </button>
    <ul v-show="!isCollapsed">
      <slot><li>No sounds loaded</li></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["entry"],
  inject: ["scrollToTop"],
  data() {
    return {
      title: this.entry.title,
      link: this.entry.title.replace(/[^\w\d]/gi, "-"),
      isCollapsed: false,
    };
  },
};
</script>

<style lang="scss">
.sfx-entry {
  position: relative;
  border-radius: 10px;
  margin: 0 0 30px;
  border-bottom: 10px solid rgba(0, 0, 50, 0.1);
  background: rgba(0, 0, 50, 0.4);

  ul {
    margin: 0;
    padding: 0;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    text-align: center;
    border-radius: 4px;
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      fill: #e3ebae;
      transition: fill 0.1s linear;
    }

    &:hover svg {
      fill: #fff;
    }
  }
}
</style>
