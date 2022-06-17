<template>
  <li>
    <a @click="tocScroll($event, toSlug(name, prefix))">{{ name }}</a>
    <ul v-if="typeof value === 'object' && !this.value[0] && this.level <= this.depth">
      <TableOfContentsNode v-for="(childValue, childKey) in value" :key="childKey" :name="childKey" :value="childValue" :prefix="prefix" :depth="depth" :level="level + 1" />
    </ul>
  </li>
</template>

<script>
import { ref } from "vue";

/**
 * Node of Table of Contents Tree
 * @property prefix - Prefix added to link slug
 * @property name - Name of Node
 * @property value - Value of Node
 */
export default {
  props: {
    prefix: {
      type: String,
      default: "",
    },
    depth: {
      type: Number,
      default: 2,
    },
    level: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
  },
  inject: ["scrollToY", "toSlug"],
  methods: {
    tocScroll(e, slug) {
      e.preventDefault();
      let el = document.querySelector(`[name=${slug}]`);
      console.log(el);
      if (el) {
        let bounds = el.getBoundingClientRect();
        this.scrollToY(bounds.y - 100);
      }
    },
  },
};
</script>

<style>
</style>
