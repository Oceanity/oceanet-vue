<template>
  <div class="commands" ref="test">
    <a :name="toSlug(title, prefix)" />
    <h2>{{ title }}</h2>
    <SFXEntry v-for="(entry, name) in category" :key="name" :entry="entry" :prefix="prefix" :name="name">
      <SFXCommand v-for="(command, tag) in entry" :key="command" :tag="tag" :text="command" />
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
})
export default class SFXCategory extends Vue {}
</script>

<style lang="scss">
</style>
