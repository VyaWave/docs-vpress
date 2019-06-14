// Template
<template>
  <div>
    <img :src="iconSvg" class="custom">
    <p>
      <a>
        <img src="https://img.shields.io/badge/make%20progress-happen-%234fb898.svg">
      </a>
      <a>
        <img :src="vuepressVersion">
      </a>
      <a>
        <img :src="version">
      </a>
      <a>
        <img :src="platform">
      </a>
    </p>
  </div>
</template>

// Script
<script>
const packageJson = require("../../../../package.json");
const iconSvg = require("../../../../assets/icon-left-font.svg");
const target = process.env.TARGET;

export default {
  data() {
    return {
      iconSvg
    };
  },
  computed: {
    version() {
      // dynamic version
      return `https://img.shields.io/badge/version-${
        packageJson.version
      }-%234fb898.svg`;
    },
    platform() {
      return `https://img.shields.io/badge/platform-${target}-%234fb898.svg`;
    },

    vuepressVersion() {
      const vuepressVer = packageJson.dependencies.vuepress.replace(/\-/g, "*");
      return `https://img.shields.io/badge/vuepress-${vuepressVer}-%234fb898.svg`;
    }
  },
  created() {
    console.log(
      "%c     ",
      "background-image: url('http://media0.giphy.com/media/MOWPkhRAUbR7i/giphy.gif'); background-repeat: no-repeat; background-size: 250px 113px; font-size: 113px;",
      "Relaxed Comon Boy"
    );
    console.log(
      "%c  ",
      "background-image: url('http://i.imgur.com/r9nq6d2.png'); background-repeat: no-repeat; background-size: 88px 128px; font-size: 128px;",
      "Relaxed Comon Boy"
    );
  }
};
</script>

// Style
<style scoped>
p > a {
  margin-right: 10px;
}

a:nth-child(2) {
  margin-right: 10px;
}

.custom {
  height: 150px;
}

.videoWrap video {
  display: inline-block;
  width: 200px;
}
</style>
