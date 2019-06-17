// Template
<template>
  <span class="music-player">
    <aplayer
      class="aplayer-wrap"
      repeat="repeat-all"
      :mini="true"
      :autoplay="true"
      :float="true"
      :listFolded="true"
      preload="auto"
      :music="{
        title: '花',
        artist: '谷村新司',
        src: 'https://docs.weiya.live/谷村新司-花.mp3',
        pic: 'https://docs.weiya.live/谷村新司-花.jpg'
        }"
      :list="[
        {
        title: '花',
        artist: '谷村新司',
        src: 'https://docs.weiya.live/谷村新司-花.mp3',
        pic: 'https://docs.weiya.live/谷村新司-花.jpg'
        },
        {
        title: 'Travel Time',
        artist: '岸部真明',
        src: 'https://docs.weiya.live/time-travel.mp3',
        pic: 'https://docs.weiya.live/about-mes.jpg'
        },
      ]"
    />
    <div class="music-desc">Cool MAN!</div>
  </span>
</template>

// Script
<script>
// ES6
import Aplayer from "vue-aplayer";

export default {
  components: {
    Aplayer
  },
  data() {
    return {
      audio: null,
      playing: false
    };
  },
  computed: {
    icon() {
      return this.playing ? pauseIcon : playIcon;
    }
  },
  methods: {
    loadMusic() {
      if (!this.audio) {
        this.audio = document.getElementById("bg-music");
      }
      const musicInBrowserHandler = () => {
        if (this.audio && typeof this.audio.play == "function") {
          this.audio.play().catch(err => {});
        }
        this.playing = true;
        document.body.removeEventListener("click", musicInBrowserHandler);
      };
      document.body.addEventListener("click", musicInBrowserHandler);
    },
    musicHandler() {
      if (!this.audio) {
        return;
      }
      if (this.playing) {
        this.audio.pause();
        this.playing = false;
      } else {
        this.audio.play();
        this.playing = true;
      }
    }
  },
  mounted() {
    this.loadMusic();
  }
};
</script>

// Style
<style scoped>
.music-player {
  box-sizing: border-box;
  align-items: center;
  position: relative;
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 1.25rem 1.25rem;
}

.aplayer-wrap {
  display: inline-block;
}

.bg-music {
  display: none;
}

.playerComtrols {
  position: absolute;
  height: 2rem;
}
</style>
