import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Igra Lapta",
  description: "Lapta rules",
  srcDir: './src',
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
        text: 'Правила',
        link: '/rules'
      },
      {
        text: 'История до 1964 г.',
        link: '/history'
      },      
      {
        text: 'Книги',
        link: '/books/',
        activeMatch: '/books/'
      }
    ],

    sidebar: {
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      '/rules/': [
        {
          text: 'Правила',
          items: [
            {
              text: 'Большая спортивная лапта',
              link: '/rules/big-sport-lapta'
            },
            {
              text: 'Большая лапта',
              link: '/rules/big-lapta'
            },            
            {
              text: 'Упрощенные правила Мослапты',
              link: '/rules/moslapta'
            },          
            {
              text: 'Город-за-городом',
              link: '/rules/town-by-town'
            },
            {
              text: 'История спортивных правил до 1964 г.',
              link: '/rules/history'
            }
          ]
        },
      ],
      '/history/': [
        {
          text: 'История до 1964 г.',
          items: [
            {
              text: 'до 1957 г.',
              link: '/history/till-1957'
            },
            {
              text: '1957. Первые официальные соревнования',
              link: '/history/1957'
            },          
            {
              text: '1958. Первый чемпионат РСФСР',
              link: '/history/1958'
            },
            {
              text: '1959. II летняя Спартакиада народов РСФСР',
              link: '/history/1959'
            },
            {
              text: 'после 1959',
              link: '/history/after-1959'
            }          
          ]
        },        
      ],
      '/books/': [
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
              text: '1978. В. Астафьев. "Гори, гори ясно"',
              link: '/books/1978-last-bow/',
            },          
            {
              text: '1988. Вспомним забытые игры. Лапта',
              link: '/books/1988-remember-forgotten-games/',
            },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
