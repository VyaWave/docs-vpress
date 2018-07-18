// https://vuepress.vuejs.org/zh/config/

// Docs Config
module.exports = {

  // Basic Config
  title: '🐯前端指南',
  description: 'Just Build My FE Knowledge',
  // # 大小写敏感
  base: '/magic-wpress/', 
  head: [
    ['link', { rel: 'icon', href: '/star.png' }]
  ],
  
  // Theme Config
  themeConfig: {
    // Nav Bar Config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Star Me', link: 'https://github.com/ayameng' },
    ],

    // Side Bar Config
    sidebar: [
      '/',
    ],

    // Show All Links Default: false
    displayAllHeaders: true 
  }
}
