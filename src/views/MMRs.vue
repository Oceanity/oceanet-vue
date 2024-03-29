<template>
  <div class="box padded">
    <h1>MMR Music</h1>
    <p>Below is music I've sequenced for Majora's Mask Randomizer.</p>
  </div>
  <div class="mmr-category box" v-for="(source, album) in sources" :key="album">
    <h3>{{ album }}</h3>
    <ul>
      <li v-for="(title, slug) in source" :key="slug" :class="{ playing: currentTrack === slug }">
        <PlayPauseButton :playOn="currentTrack != slug || state !== 1" @play="playAudio({ slug, title, album })" @pause="pauseAudio()" />
        <DownloadButton :href="`${root}mmrs/${slug}.mmrs`" />
        <h4>{{ title }}</h4>
      </li>
    </ul>
  </div>
  <div class="now-playing box" :class="{ show: state != 0 }">
    <a class="close" @click="stopAudio({ slug, title, album })">x</a>
    <p class="title">{{ nowPlaying ? nowPlaying.title : "" }}</p>
    <p class="category">{{ nowPlaying ? nowPlaying.album : "" }}</p>
    <p>{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</p>
    <div class="progress-bar" @click="seekAudio">
      <div class="progress-bar-fill" :style="{ width: (currentTime / duration) * 100 + '%' }"></div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import mmrsJson from "../json/mmrs.json";
import PlayPauseButton from "../components/PlayPauseButton.vue";
import DownloadButton from "../components/ui/DownloadButton.vue";

@Options({
  data() {
    return {
      sources: {},
      root: "https://github.com/Oceanity/Oceanitys-MMR-Music/raw/main/",
      audio: new Audio(),
      currentTime: 0,
      duration: 0,
      state: 0,
      nowPlaying: null,
      currentTrack: null,
      timerUpdate: null,
    };
  },
  components: {
    PlayPauseButton,
    DownloadButton,
  },
  // Functions
  methods: {
    playAudio(entry) {
      if (this.state !== 0) {
        this.audio.pause();
        this.state = 2;
      }
      if (this.currentTrack !== entry.slug) {
        this.stopAudio(entry.slug, () => {
          this.audio.src = `${this.root}ogg/${entry.slug}.ogg`;
          this.audio.load();
          this.nowPlaying = entry;
          this.currentTrack = entry.slug;
        });
      } else {
        this.audio.play();
        this.state = 1;
      }
    },
    pauseAudio() {
      if (this.state === 1) {
        this.audio.pause();
        this.state = 2;
      }
    },
    seekAudio(e) {
      let time = (e.offsetX / e.target.clientWidth) * this.audio.duration;
      this.audio.currentTime = time;
    },
    formatTime(time) {
      time = Math.floor(time);
      let minutes = Math.floor(time / 60),
        seconds = time % 60;

      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    stopAudio(entry, callback) {
      if (this.state === 1) {
        this.audio.pause();
      }
      this.state = 0;
      this.nowPlaying = entry;
      this.currentTrack = null;
      this.currentTime = 0;
      this.duration = 0;
      if (callback && typeof callback === "function") {
        callback();
      }
    },
  },
  // Lifecycle
  created() {
    this.sources = mmrsJson;

    // Timer Update Function
    this.timerUpdate = setInterval(() => {
      if (this.state === 1) {
        this.currentTime = this.audio.currentTime;
      }
    }, 100);

    // Events
    this.audio.addEventListener(
      "canplaythrough",
      (e) => {
        this.audio.play();
        this.state = 1;
      },
      false
    );
    this.audio.addEventListener(
      "ended",
      (e) => {
        this.nowPlaying = null;
        this.state = 0;
      },
      false
    );
    this.audio.addEventListener(
      "durationchange",
      (e) => {
        this.duration = this.audio.duration;
      },
      false
    );
  },
  beforeUnmount() {
    if (this.state !== 0) {
      this.audio.pause();
      this.audio = null;
    }
    clearInterval(this.timerUpdate);
  },
})
export default class MMRs extends Vue {}
</script>

<style lang="scss">
.mmr-category {
  li {
    position: relative;
    display: flex;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      z-index: -1;
      transition: opacity 0.5s linear;
      background: rgba(200, 255, 255, 0.5);
    }
    &.playing:before {
      opacity: 1;
    }

    h4 {
      margin: auto 0;
      vertical-align: middle;
    }
  }
}
.now-playing {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  margin: 0;
  border-radius: 10px;
  padding: 10px 30px 20px 10px;
  min-width: 240px;
  min-height: 50px;
  font-size: 16px;
  letter-spacing: 1px;
  background: rgba(0, 0, 50, 0.7);
  overflow: hidden;

  &.show {
    display: block;
  }

  .close {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    line-height: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  p {
    margin: 0 0 5px;
    user-select: none;
  }
  .title {
    font-weight: bold;
  }
  .category {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }

  .progress-bar {
    position: absolute;
    border-radius: 5px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    height: 10px;
    overflow: hidden;
    background: #000;
    cursor: pointer;

    .progress-bar-fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: #fff;
      pointer-events: none;
    }
  }
}
</style>
