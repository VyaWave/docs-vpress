// https://vuepress.vuejs.org/zh/config/
// https://vuepress.vuejs.org/zh/default-theme-config/

module.exports = {

  // Basic Config
  title: '🐯☀️前端指南',

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
      ['/javascript/', 'JS'],
      ['/html/', 'HTML'],
      ['/css/', 'CSS'],
    ]
    ,
    displayAllHeaders: true 
  }
}
