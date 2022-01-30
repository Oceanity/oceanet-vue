<template>
  <div class="table-of-contents">
    <h3>Table of Contents</h3>
    <ul class="root">
      <li v-for="category in categories" :key="category">
        <ul>
          <a :href="'#' + category.title.replace(/\W/gi, '-')" @click="jumpToEntry($event, category)">
            {{ category.title }}
          </a>
          <li v-for="entry in category.entries" :key="entry">
            <a :href="'#' + entry.title.replace(/\W/gi, '-')" @click="jumpToEntry($event, entry)">
              {{ entry.title }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["categories"],
  methods: {
    jumpToEntry(e, item) {
      e.preventDefault();
      let tag = document.querySelector(`a[name=${item.title.replace(/[^\w\d]/gi, "-")}]`);
      if (tag) {
        tag.scrollIntoView({ behavior: "smooth" });
      }
      if (!item.entries && item.isCollapsed) item.isCollapsed = false;
    },
  },
};
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

    a {
      text-decoration: none;
      color: #e3ebae;
    }
  }
}
</style>
