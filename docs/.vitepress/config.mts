import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja",
  title: "ShinCode_Camp_Blog",
  description: "作りたいアプリを、思い通りに作れるエンジニアへ",
  base: "/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "無料ではじめる",
        items: [
          {
            text: "ShinCode_Campで学ぶ🚀",
            link: "https://code-s-school-5bc2.thinkific.com/bundles/shincode-camp",
          },
        ],
      },

      {
        text: "Udemyクーポン",
        items: [
          {
            text: "お得な90%割引クーポン",
            link: "http://shincode.info/2021/12/31/udemy-discount-coupon/",
          },
        ],
      },
    ],

    sidebar: [
      {
        items: [
          { text: "ShinCode_Campについて", link: "/posts/shincode_camp" },
          { text: "ブログ記事一覧", link: "/posts/postList" },
          { text: "タグ一覧", link: "/tags/tagList" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Shin-sibainu" },
      { icon: "twitter", link: "https://twitter.com/Shin_Engineer" },
      {
        icon: "youtube",
        link: "https://www.youtube.com/channel/UCNTxclE0N4qsUuirssL_D8w",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © present shincode",
    },
  },
});
