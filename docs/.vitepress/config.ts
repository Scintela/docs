import { defineConfig } from 'vitepress'

// 绑定自定义域名 scintela.dev 后改为 '/'
const base = '/docs/'

export default defineConfig({
  base,
  title: 'Scintela',
  head: [['link', { rel: 'icon', href: `${base}favicon.svg` }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.svg',
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Scintela' }]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '矩阵', link: '/matrix/' },
          { text: '教程', link: '/guide/' },
          { text: 'GitHub', link: 'https://github.com/Scintela' }
        ],
        sidebar: {
          '/matrix/': [
            {
              text: '模型 × 硬件矩阵',
              items: [
                { text: '总览', link: '/matrix/' },
                { text: '硬件点亮榜', link: '/matrix/lightboard/' }
              ]
            }
          ],
          '/guide/': [
            { text: '教程', items: [{ text: '目录', link: '/guide/' }] }
          ]
        },
        outline: { label: '本页目录' },
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdated: { text: '最后更新' }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Matrix', link: '/en/matrix/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'GitHub', link: 'https://github.com/Scintela' }
        ],
        sidebar: {
          '/en/matrix/': [
            {
              text: 'Model × Hardware Matrix',
              items: [
                { text: 'Overview', link: '/en/matrix/' },
                { text: 'Hardware Lightboard', link: '/en/matrix/lightboard/' }
              ]
            }
          ],
          '/en/guide/': [
            { text: 'Guide', items: [{ text: 'Index', link: '/en/guide/' }] }
          ]
        }
      }
    }
  }
})
