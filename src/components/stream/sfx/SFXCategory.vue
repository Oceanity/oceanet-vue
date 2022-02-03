<template>
  <div class="commands" ref="test">
    <a :name="toSlug(title, prefix)" />
    <h2>{{ title }}</h2>
    <SFXEntry v-for="(entry, name) in category" :key="name" :entry="entry" :prefix="prefix" :name="name">
      <SFXCommand v-for="command in entry" :key="command" :tag="formatText(command)[0]" :text="formatText(command)[1]" />
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
  props: ["category", "name", "prefix"],
  inject: ["toSlug"],
  components: {
    SFXEntry,
    SFXCommand,
  },
  data() {
    return {
      title: this.name,
      link: this.toSlug(this.name, this.prefix),
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
