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
      ['/browser/', '🐿🌨 Hi Browser'],
      ['/html/', '🐿🌨 Hi HTML'],
      ['/javascript/', '⛽🌨 Hi JavaScript'],
      ['/css/', '☀️🌧 Hi CSS'],
      ['/function/', '🐿🌨 Hi Function'],
      ['/object/', '☀️🌧 Hi Object'],
      ['/design-patterns/', '⛈☀️ Hi Design patterns'],
      ['/algorithm/', '⛽☀️ Hi Algorithm'],
      ['/interview/', '⛈☀️ Hi Interview'],
      ['/source/', '⛈🐳 Hi Open Source'],
      ['/shell/', '⛈🐳 Hi Shell'],
      ['/node/', '⛈🐳 Hi Node'],
      ['/emojis/', '⛈☀️ Hi Emojis'],
      ['/license/', '⛈☀️ License'],
    ],
    // 显示所有页面的标题链接
    displayAllHeaders: false
  }
}
