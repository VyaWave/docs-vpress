// https://vuepress.vuejs.org/zh/config/
// https://vuepress.vuejs.org/zh/default-theme-config/

const webpack = require('webpack')
module.exports = {

  // Basic Config
  title: '🐯 ☀️ 一路向北的前端指南',

  description: 'Just Build My FE Knowledge',

  // # 大小写敏感
  base: process.env.VUEPRESS_BASE || '/magic-wpress/', // don't support three just support this `value1 || value2` 
  head: [
    ['link', { rel: 'icon', href: '/star.png' }]
  ],
  
  // Theme Config
  themeConfig: {

    // Nav Bar Config
    nav: [
      { text: 'Home', link: '/' },
      { text: '⭐️ Star Me', link: 'https://github.com/ayameng/magic-wpress' },
    ],

    // Side Bar Config
    sidebar: [
      '/',
      ['/browser/', '🐿 Hi Browsers'],
      ['/html/', '🌨  Hi HTML'],
      ['/javascript/', '⛽ Hi JavaScript'],
      ['/css/', '☀️ Hi CSS'],
      ['/function/', '🌨 Hi Function'],
      ['/object/', '☀️ Hi Object'],
      ['/design-patterns/', '⛈ Hi Design patterns'],
      ['/algorithm/', '⛽ Hi Algorithm'],
      ['/interview/', '☀️ Hi Interview'],
      ['/source/', '🐳 Hi Source'],
      ['/node/', '⛈Hi Node'],
      // ['/changelog/', '🐳 history-log'],
      ['/about-me/', '☀️ 蜜汁彩蛋'],
    ],
    // 显示所有页面的标题链接
    displayAllHeaders: false
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
    return {}
  },

  // serviceWorker: true
}
