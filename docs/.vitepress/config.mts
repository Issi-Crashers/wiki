import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "issi-crashers Wiki",
  cleanUrls: true,
  description: "mindyuuサーバーの用語集・Q&Aを掲載するWiki",
  lang: "ja-JP",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'はじめに', link: '/getting_started.md' }
    ],

    sidebar: [
      {
        text: 'はじめに', link: '/getting_started.md'
      },
      {
        text: 'Tips',
        collapsed: true,
        items:[
          {
            text: '嫌われる行為',
            link: '/tips/嫌われる行為.md'
          }
        ]
      },
      {
        text: 'Wiki',
        collapsed: true,
        items: [
          {
            text: '初めまして岡本',
            link: '/wiki/初めまして岡本.md'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Issi-Crashers' }
    ]
  }
})
