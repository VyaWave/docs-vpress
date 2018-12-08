// Template
<template>
  <audio id="bg-music" class="bg-music" controls="false" autoplay="autoplay" loop download="false">
    <source :src="$withBase('/time-travel.mp3')">
  </audio>
</template>

// Script
<script>
export default {
  mounted() {
    const audio = document.getElementById("bg-music");
    function musicInBrowserHandler() {
      audio.play();
      document.body.removeEventListener("click", musicInBrowserHandler);
    }
    document.body.addEventListener("click", musicInBrowserHandler);
  }
};
</script>

// Style
<style scoped>
.bg-music {
  display: none;
}
</style>
