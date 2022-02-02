<template>
  <div id="sound-commands">
    <div class="box padded">
      <h1>Stream Sound Commands</h1>
      <p>Below are sound effects that can be used on my stream by subscribers and via the "Play SFX" channel point redeem</p>
    </div>
    <TableOfContents :categories="categories" />
    <Category v-for="category in categories" :key="category" :category="category" />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import soundFiles from "../../json/soundCommands.json";
import TableOfContents from "../../components/stream/sfx/SFXTableOfContents.vue";
import Category from "../../components/stream/sfx/SFXCategory.vue";

/**
 * Stream Sound Commands Page
 * @displayName StreamSFX
 */
@Options({
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
})
export default class StreamSFX extends Vue {}
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
