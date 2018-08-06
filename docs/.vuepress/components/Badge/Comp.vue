// Template
<template>
  <p>
    <a><img src="https://img.shields.io/badge/make%20progress-happen-%234fb898.svg"></a>
    <a><img src="https://img.shields.io/badge/develop%20with-VuePreess-%234fb898.svg"></a>
    <a><img :src="version"></a>
    <a><img src="https://img.shields.io/badge/status-coding-%234fb898.svg"></a>
  </p>
</template>

// Script
<script>

const packageJson = require('../../../../package.json')

export default {
  computed: {
    version() {
      // dynamic version
      return `https://img.shields.io/badge/version-0.0.x-%234fb898.svg`
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

</style>
