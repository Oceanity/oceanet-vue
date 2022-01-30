<template>
  <div class="commands">
    <a :name="link" />
    <h2>{{ title }}</h2>
    <SFXEntry v-for="entry in category.entries" :key="entry" :entry="entry">
      <SFXCommand v-for="command in entry.commands" :key="command" :tag="formatText(command)[0]" :text="formatText(command)[1]" />
    </SFXEntry>
  </div>
</template>

<script>
import SFXEntry from "./SFXEntry.vue";
import SFXCommand from "./SFXCommand.vue";

export default {
  props: ["category"],
  components: {
    SFXEntry,
    SFXCommand,
  },
  data() {
    return {
      title: this.category.title,
      link: this.category.title.replace(/[^\w\d]/gi, "-"),
    };
  },
  methods: {
    formatText(text) {
      let split = text.split(" "),
        tag = split.shift();
      return [tag, split.join(" ").replace(/(\[[^\]]+\])/gi, "<span>$1</span>")];
    },
  },
};
</script>

<style lang="scss">
</style>
