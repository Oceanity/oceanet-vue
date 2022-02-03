<template>
  <div class="box padded">
    <h1>
      Discord<span v-show="name != ''"> - {{ name }}</span>
    </h1>
    <p>Want updates on my stream and a friendly community to chat with? <a href="http://discord.oceanity.net/" target="_blank">Join my Discord here!</a></p>
  </div>
  <h2 v-show="count != -1">Online Members - {{ count }}</h2>
  <div class="discord-status">
    <div class="discord-member" v-for="member in members" :key="member.username">
      <div class="discord-avatar" :class="member.status">
        <img :alt="member.username" :src="member.avatar_url" />
      </div>
      <div class="discord-status">
        <span class="username">{{ member.username }}</span>
        <span class="game" v-if="member.game">{{ member.game.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discordData: null,
      members: [],
      name: "",
      count: -1,
    };
  },
  created() {
    fetch("https://discord.com/api/guilds/84781949679329280/widget.json")
      .then((res) => res.json())
      .then((data) => {
        this.discordData = data;
        this.members = data.members;
        this.name = data.name;
        this.count = data.presence_count;
      });
  },
};
</script>

<style lang="scss">
.discord-status {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  .discord-member {
    --status-color: white;
    display: flex;
    margin: 5px 1%;
    flex-basis: 23%;
    border-radius: 32px;
    overflow-x: hidden;
    box-sizing: border-box;
    justify-content: left;
    white-space: nowrap;
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

      &.online {
        --status-color: #43b581;
      }
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
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
}
</style>
