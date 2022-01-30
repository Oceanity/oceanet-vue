<template>
  <li class="sfx-command">
    <pre @click="copyCommand">{{ tag }}</pre>
    <span class="command-text" v-html="text" />
  </li>
</template>

<script>
export default {
  props: ["tag", "text"],
  data() {
    return {};
  },
  methods: {
    copyCommand() {
      navigator.clipboard.writeText(this.tag);
    },
  },
};
</script>

<style lang="scss">
.sfx-command {
  .command-text {
    span {
      margin-right: 2px;
      font-style: italic;
      color: rgba(255, 255, 255, 0.75);
    }
  }
}

#sound-commands .commands li {
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  list-style-type: none;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: none;
}
#sound-commands .commands li:nth-of-type(even) {
  background: rgba(0, 0, 50, 0.05);
}
@media screen and (max-width: 640px) {
  .sfx-command {
    padding: 10px;
    flex-direction: column;

    pre {
      padding: 10px;
      border-radius: 10px;
      text-align: center;
      flex: 0;
      font-size: 18px;
    }
  }
}
</style>
