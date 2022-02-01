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
import { Options, Vue } from "vue-class-component";
import SFXEntry from "./SFXEntry.vue";
import SFXCommand from "./SFXCommand.vue";

/**
 * Category containing SFX entries
 * @displayName SFXCategory
 */
@Options({
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
})
export default class SFXCategory extends Vue {}
</script>

<style lang="scss">
</style>
