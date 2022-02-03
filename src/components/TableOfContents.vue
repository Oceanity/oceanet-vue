<template>
  <div class="table-of-contents">
    <h3>Table of Contents</h3>
    <ul class="root">
      <TableOfContentsNode v-for="(value, key) in obj" :key="key" :name="key" :value="value" :prefix="prefix" />
    </ul>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import TableOfContentsNode from "./TableOfContentsNode.vue";

/**
 * Table of Contents for Stream Sounds
 * @displayName SFXTableOfContents
 * @property obj -- object to iterate through
 * @property prefix -- prefix of links
 */
@Options({
  props: ["obj", "prefix"],
  components: {
    TableOfContentsNode,
  },
})
export default class SFXTableOfContents extends Vue {}
</script>

<style lang="scss">
.table-of-contents {
  margin: 0 0 30px;
  border-radius: 10px;
  border-bottom: 10px solid rgba(0, 0, 50, 0.1);
  max-width: 400px;
  background: rgba(0, 0, 50, 0.4);

  h3 {
    background: rgba(0, 0, 50, 0.5);
  }

  ul.root {
    padding: 10px;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      line-height: 30px;
      list-style-type: none;
      font-weight: bold;
    }

    ul li {
      margin-left: 20px;
      list-style-type: square;
      font-weight: normal;
    }
  }
}
</style>
