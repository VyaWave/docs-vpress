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
    displayAllHeaders: false,

    // 更新时间戳
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'ayameng/magic-wpress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/" Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Open Source',

    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',

    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: 'Help Me To Do More Good'
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
    return {}
  },

  evergreen: true,

  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it'))
    }
  }

  // Only Https
  // serviceWorker: true
}
