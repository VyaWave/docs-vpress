<template>
  <div class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <ul class="sidebar-links" v-if="items.length">
      <li v-for="(item, i) in items" :key="i">
        <SidebarGroup
          v-if="item.type === 'group'"
          :item="item"
          :first="i === 0"
          :open="i === openGroupIndex"
          :collapsable="item.collapsable"
          @toggle="toggleGroup(i)"
        />
        <SidebarLink v-else :item="item"/>
      </li>
      <li class="videoWrap" v-if="showSupriseEgg">
        <ClientOnly>
          <video
            muted
            loop
            autoplay
            src="https://files.xiami.com/webh5/files/video/a29ccbee1e9a1624832ef6d32c80225b.quicktime"
          ></video>
          <div class="tip bottom">Vya 会发现更大的世界</div>
        </ClientOnly>
      </li>
    </ul>
    <slot name="bottom"/>
  </div>
</template>

<script>
import SidebarGroup from "./SidebarGroup.vue";
import SidebarLink from "./SidebarLink.vue";
import NavLinks from "./NavLinks.vue";
import { isActive } from "./util";

export default {
  components: { SidebarGroup, SidebarLink, NavLinks },
  props: ["items"],
  data() {
    return {
      openGroupIndex: 0,
      showSupriseEgg: false

    };
  },
  created() {
    this.refreshIndex();
  },
  watch: {
    $route() {
      this.refreshIndex();
    }
  },
  methods: {
    refreshIndex() {
      const index = resolveOpenGroupIndex(this.$route, this.items);
      if (index > -1) {
        this.openGroupIndex = index;
      }

      if (this.$route.fullPath == "/about-me.html") {
        this.showSupriseEgg = true;
        console.log(
          "%c     ",
          "background-image: url('http://media0.giphy.com/media/MOWPkhRAUbR7i/giphy.gif'); background-repeat: no-repeat; background-size: 250px 113px; font-size: 113px;",
          "\n🌚 Great U Find Me !!!"
        );
      } else {
        this.showSupriseEgg = false;
      }
    },
    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
    },
    isActive(page) {
      return isActive(this.$route, page.path);
    }
  }
};

function resolveOpenGroupIndex(route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (
      item.type === "group" &&
      item.children.some(c => isActive(route, c.path))
    ) {
      return i;
    }
  }
  return -1;
}
</script>

<style lang="stylus">
@import './styles/config.styl';

.videoWrap
  margin-top: 600px;

  video
    width: 200px;
    padding: 0.35rem 1rem 0.35rem 1.25rem;

  .tip
    text-align: center;

.sidebar
  ul
    padding: 0;
    margin: 0;
    list-style-type: none;

  a
    display: inline-block;

  .nav-links
    display: none;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a
      font-weight: 600;

    .nav-item, .repo-link
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;

  .sidebar-links
    padding: 1.5rem 0;

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display: block;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top: calc(1rem - 2px);

    .sidebar-links
      padding: 1rem 0;
</style>
