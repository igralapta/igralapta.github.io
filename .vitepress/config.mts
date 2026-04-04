import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Igra Lapta",
  description: "Lapta rules",
  srcDir: './src',
  outDir: './public',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Examples',
        link: '/markdown-examples'
      },
      {
        text: 'Книги',
        link: '/books/',
        activeMatch: '/books/'
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Книги',
        items: [
          {
            text: '1957. Лапта. Правила соревнований. Иваново',
            link: '/books/1957-russian-lapta-ivanovo/',
          },
          {
            text: '1957. Лапта. Правила соревнований. Ставрополь',
            link: '/books/1957-russian-lapta-stavropol/'
          },
          {
            text: '1957. Русская лапта',
            link: '/books/1957-russian-lapta/'
          },
          {
            text: '1959. Русская лапта. Программа финальных соревнований',
            link: '/books/1959-russian-lapta/'
          },
          {
            text: '1961. Русская удалая',
            link: '/books/1961-russian-dashing/'
          },
          {
            text: '1961. Лапта',
            link: '/books/1961-lapta/'
          },
          {
            text: '1963. Лапта',
            link: '/books/1963-lapta/'
          },
          {
            text: '1964. Правила соревнований по лапте',
            link: '/books/1964-lapta-rules/'
          },
          {
            text: '1988. Вспомним забытые игры. Лапта',
            link: '/books/1988-remember-forgotten-games/',
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
