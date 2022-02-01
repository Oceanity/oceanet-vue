<template>
  <div id="sound-commands">
    <h1>Stream Sound Commands</h1>
    <TableOfContents :categories="categories" />
    <Category v-for="category in categories" :key="category" :category="category" />
  </div>
</template>

<script>
import soundFiles from "../../json/soundCommands.json";
import TableOfContents from "../../components/stream/sfx/SFXTableOfContents.vue";
import Category from "../../components/stream/sfx/SFXCategory.vue";

export default {
  data() {
    return {
      categories: soundFiles.categories,
    };
  },
  components: {
    TableOfContents,
    Category,
  },
  methods: {
    toggleEntry(entry) {
      entry.isCollapsed = !entry.isCollapsed;
    },
  },
  mounted() {
    document.title = "Stream Sound Effects";
  },
};
</script>


<style lang="scss">
#sound-commands {
  h3 {
    margin: 0;
    border-radius: 10px 10px 0 0;
    padding: 7px 10px;
    position: relative;
    font-size: 18px;
    background: rgba(0, 0, 50, 0.7);
  }

  a[name] {
    scroll-margin: 100px;
  }
}
#sound-commands .command-text {
  margin: 0;
  line-height: 30px;
  word-break: break-word;
}
</style>
