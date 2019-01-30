// Template
<template>
  <span></span>
</template>

// Script
<script>
export default {
  data() {
    return {
      emoji: ["🌑", "🌒", "🌓", "🌔", "🌝", "🌖", "🌗", "🌘"]
    };
  },

  watch: {
    $route() {
      this.setEmoji();
      // this.setLoopEmoji();
    }
  },

  methods: {
    setEmoji() {
      const random = Math.random() * 10;

      const face = ["🌑", "🌒", "🌓", "🌔", "🌝", "🌖", "🌗", "🌘"];
      const weather = [
        "☀️",
        "☀️",
        "☀️",
        "🌤",
        "⛅️",
        "🌥",
        "☁️",
        "🌧",
        "🌨",
        "🌧",
        "🌨",
        "🌧",
        "🌨",
        "⛈",
        "🌨",
        "🌧",
        "🌨",
        "☁️",
        "🌥",
        "⛅️",
        "🌤",
        "☀️",
        "☀️"
      ];

      // this.emoji = random > 5 ? face : weather;
    },

    setLoopEmoji() {
      location.search = this.emoji[
        Math.floor((Date.now() / 100) % this.emoji.length)
      ];
      setTimeout(this.setLoopEmoji, 200);
    }
  },

  mounted() {
    // this.setLoopEmoji();
  }
};
</script>

// Style
<style scoped>
</style>
