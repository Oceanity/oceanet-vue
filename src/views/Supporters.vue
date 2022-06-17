<template>
  <div class="sub-tier-wrapper" v-if="subsJson.length">
    <h2>Twitch Subs</h2>
    <div class="sub-tier" v-for="(tier, n) in tiers" :key="`tier-${n}-sub`" :class="`tier-${Math.abs(n - 3)}-sub`">
      <h3>Tier {{ Math.abs(n - 3) }}</h3>
      <ul>
        <li v-for="sub in subsJson.filter((item) => item.tier === tier && item.user_name !== 'Oceanity')" :key="sub.user_id" :class="{ 'is-gift': sub.gifter_name }">
          <div class="avatar"></div>
          <div class="text">
            <span class="gifted-by" v-if="sub.gifter_id">Gifted by {{ sub.gifter_name }}</span>
            <span class="name">{{ sub.user_name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { TwitchLog } from "../classes/Logger";

export default {
  data() {
    return {
      tiers: ["3000", "2000", "1000"],
      subsJson: [],
    };
  },
  methods: {
    fetchSubs() {
      const subsUrl = "https://proud-glaze-yarrow.glitch.me/subs";

      fetch(subsUrl)
        .then((res) => res.json())
        .then((data) => {
          // See if Glitch is live
          if (data.subs) {
            TwitchLog("Loaded Subs from Twitch API");
            this.subsJson = data.subs;
          }
          // Else, try again in another second
          else {
            setTimeout(() => {
              TwitchLog("Couldn't retreive subs, trying again in 1000ms");
              this.fetchSubs();
            }, 1000);
          }
        });
    },
    fetchAvatar(id) {
      const avatarUrl = "https://proud-glaze-yarrow.glitch.me/subs";
    },
  },
  created() {
    this.fetchSubs();
  },
};
</script>

<style lang="scss">
.sub-tier-wrapper {
  .tier-3-sub li {
    background-color: rgba(255, 153, 0, 0.75);
  }

  .tier-2-sub li {
    background-color: rgba(131, 137, 151, 0.75);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;

    li {
      position: relative;
      display: flex;
      flex-basis: 31%;
      vertical-align: middle;
      margin: 5px 1%;
      border-radius: 30px;
      height: 48px;
      overflow: hidden;
      background: rgba(0, 0, 50, 0.5);

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background: linear-gradient(270deg, rgba(200, 255, 255, 0) 0%, rgba(200, 255, 225, 0.3) 100%);
      }

      &.is-gift:after {
        background: linear-gradient(270deg, rgba(255, 166, 242, 0) 0%, rgba(255, 166, 242, 0.6) 100%);
      }
      &.is-gift:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 48px;
        height: 48px;
        z-index: 2;
        opacity: 0.3;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' type='color-fill-current' width='20px' height='20px' version='1.1' fill='%23114' viewBox='0 0 20 20' x='0px' y='0px'%3E%3Cpath fill-rule='evenodd' d='M16 6h2v6h-1v6H3v-6H2V6h2V4.793c0-2.507 3.03-3.762 4.803-1.99.131.131.249.275.352.429L10 4.5l.845-1.268a2.81 2.81 0 01.352-.429C12.969 1.031 16 2.286 16 4.793V6zM6 4.793V6h2.596L7.49 4.341A.814.814 0 006 4.793zm8 0V6h-2.596l1.106-1.659a.814.814 0 011.49.451zM16 8v2h-5V8h5zm-1 8v-4h-4v4h4zM9 8v2H4V8h5zm0 4H5v4h4v-4z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E%0A");
        background-size: 80% 80%;
        background-repeat: no-repeat;
        background-position: center center;
      }

      .avatar {
        width: 48px;
        height: 48px;
        flex: 0 0 48px;
        border-radius: 24px;
        background: rgba(0, 0, 50, 0.3);
      }

      .text {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
      }

      .name,
      .gifted-by {
        position: relative;
        z-index: 5;
      }
      .gifted-by {
        margin: 0 0 4px;
        font-size: 12px;
        white-space: nowrap;
        color: rgba(255, 255, 255, 0.65);
      }
    }
  }
}
</style>
