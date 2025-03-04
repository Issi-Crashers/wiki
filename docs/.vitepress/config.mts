import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "issi-crashers",
  cleanUrls: true,
  description: "Wiki",
  lang: "ja-JP",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'はじめに', link: '/getting_started.md' }
    ],

    sidebar: [
      {
        text: 'はじめに', link: '/getting_started.md'
      },
      {text: 'Wiki',
        collapsed: false,
        items: [
          //{
          //  text: 'ページタイトル',
          //  link: '/wiki/タイトル.md'
          //}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Issi-Crashers' }
    ]
  }
})