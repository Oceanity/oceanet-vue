<template>
  <div class="discord-member-wrapper">
    <h2 v-show="count != -1">Online Members - {{ count }}</h2>
    <ul class="discord-member-list">
      <li class="discord-member" v-for="member in pageMembers" :key="member.username">
        <div class="discord-avatar" :class="member.status">
          <img :alt="member.username" :src="member.avatar_url" />
        </div>
        <div class="discord-status">
          <span class="username">{{ member.username }}</span>
          <span class="game" v-if="member.game">{{ member.game.name }}</span>
        </div>
      </li>
    </ul>
    <ul :v-if="pages > 1" class="discord-page-nav">
      <li class="discord-page-prev" :class="{ disabled: curPage < 1 }">
        <a @click="prevPage">&lt;</a>
      </li>
      <li v-for="page in pages" :key="`discord-page-${page}`" :class="{ active: curPage === page - 1 }">
        <a @click="getPage(page - 1)">{{ page }}</a>
      </li>
      <li class="discord-page-next" :class="{ disabled: curPage === pages - 1 }">
        <a @click="nextPage">&gt;</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { DiscordLog } from "../../../classes/Logger";

/**
 * Actively updating list of Discord members
 * @displayName DiscordMemberList
 * @property serverID (String) <required> - ID of server to read
 * @property itemsPerPage (Number) [default: 30] - Number of members to show per page
 */
export default {
  // Vars
  props: {
    serverID: {
      type: String,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 32,
    },
  },
  data() {
    return {
      count: -1,
      pages: 0,
      curPage: 0,
      members: [],
      pageMembers: [],
      url: `https://discord.com/api/guilds/${this.serverID}/widget.json`,
      refresh: null,
    };
  },
  // Functions
  methods: {
    getMembers() {
      // todo fetch members
      DiscordLog("Updating members list");
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          this.members = data.members;
          this.name = data.name;
          this.count = this.members.length;
          this.pages = Math.ceil(this.count / this.itemsPerPage);
          this.getPage(this.curPage);
          DiscordLog(`Loaded ${this.count} (${this.pages} pages) of members`);
        });
    },
    getPage(page = -1) {
      if (this.members.length) {
        // Ensure page is within bounds
        if (page < 0) page = 0;
        if (page >= this.pages) page = this.pages - 1;
        // Set local page
        this.curPage = page;
        // Get page of members
        let start = page * this.itemsPerPage;
        let items = this.members.length - start;
        if (items > this.itemsPerPage) items = this.itemsPerPage;
        this.pageMembers = this.members.slice(start, start + items);
      } else this.pageMembers = [];
    },
    prevPage() {
      if (this.curPage > 0) this.getPage(this.curPage - 1);
    },
    nextPage() {
      if (this.curPage < this.pages - 1) this.getPage(this.curPage + 1);
    },
  },
  // Lifecycle
  created() {
    DiscordLog("Creating DiscordMemberList");
    // Get members initially
    this.getMembers();
    // Update every minute
    this.refresh = setInterval(this.getMembers, 60 * 1000);
  },
  unmounted() {
    DiscordLog("Destroying DiscordMemberList");
    // Stop Updating
    clearInterval(this.refresh);
  },
};
</script>

<style lang="scss">
.discord-member-wrapper {
  .discord-member-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin: 0;
    padding: 0;
    user-select: none;

    .discord-member {
      --status-color: #43b581;
      display: flex;
      list-style-type: none;
      margin: 5px 1%;
      flex-basis: 23%;
      border-radius: 32px;
      overflow-x: hidden;
      box-sizing: border-box;
      justify-content: left;
      white-space: nowrap;
      font-size: 14px;
      background: rgba(0, 0, 50, 0.5);

      @media screen and (max-width: 960px) {
        flex-basis: 31%;
      }
      @media screen and (max-width: 640px) {
        flex-basis: 48%;
      }

      .discord-avatar {
        position: relative;
        margin-right: 10px;
        border-radius: 32px;
        border: 4px solid rgba(0, 0, 50, 0.7);
        width: 36px;
        height: 36px;

        &.idle {
          --status-color: #faa61a;
        }
        &.dnd {
          --status-color: #f04747;
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 18px;
          height: 18px;
          border-radius: 12px;
          border: 4px solid rgba(0, 0, 50, 0.7);
          box-sizing: border-box;
          background: var(--status-color);
        }

        img {
          width: inherit;
          height: auto;
          border-radius: 32px;
        }
      }
      .discord-status {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .game {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }

  .discord-page-nav {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    padding: 0;
    user-select: none;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin: 0 2px;
      width: 30px;
      height: 30px;
      position: relative;
      list-style-type: none;

      &:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgba(0, 0, 50, 0.3);
      }

      &.active:before {
        background: rgba(0, 0, 50, 0.7);

        a {
          color: #003;
        }
      }
      &.disabled a {
        opacity: 0.5;
        pointer-events: none;
        cursor: default;
      }

      a {
        padding: 5px;
      }
    }
  }
}
</style>
