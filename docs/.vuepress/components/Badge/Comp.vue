// Template
<template>
  <div>
    <img :src="iconSvg" class="custom">
    <p>
      <a><img src="https://img.shields.io/badge/make%20progress-happen-%234fb898.svg"></a>
      <a><img src="https://img.shields.io/badge/develop%20with-VuePreess-%234fb898.svg"></a>
      <a><img src="https://img.shields.io/badge/status-coding-%234fb898.svg"></a>
      <a><img :src="version"></a>
      <a><img :src="platform"></a>
      <audio controls="false" autoplay preload loop download="false" >
        <source :src="music">
      </audio>
    </p>
  </div>
</template>

// Script
<script>
const music = require('../../../../assets/time-travel.mp3')
const packageJson = require('../../../../package.json')
const iconSvg = require('../../../../assets/icon-left-font.svg')
const target = process.env.TARGET

export default {
  data(){
    return {
      iconSvg,
      music
    }
  },
  computed: {
    version() {
      // dynamic version
      return `https://img.shields.io/badge/version-${packageJson.version}-%234fb898.svg`
    },
    platform () {
      return `https://img.shields.io/badge/platform-${target}-%234fb898.svg`
    }
  }
}
</script>

// Style
<style scoped>

p > a {
  margin-right: 10px
}

a:nth-child(2) {
  margin-right: 10px
}

.custom {
  height: 150px;
}

</style>
