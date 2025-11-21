import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '梧桐GIS',
  description: '梧桐GIS 文档与课程站',
  themeConfig: {
    logo: "/logo.png", // 之后可以换成你的 LOGO 图片地址
    nav: [
      { text: '首页', link: '/' },
      { text: '教程中心', link: '/tutorials/' },
      { text: '资源中心', link: '/resources/' },
      { text: '课程课程', link: '/courses/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/tutorials/': [
        {
          text: '教程中心',
          items: [
            { text: '快速开始', link: '/tutorials/quickstart' },
            { text: '可视化与制图', link: '/tutorials/visualization' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源中心',
          items: [
            { text: '数据与底图', link: '/resources/data-basemaps' },
            { text: '工具与插件', link: '/resources/tools' }
          ]
        }
      ],
      '/courses/': [
        {
          text: '课程中心',
          items: [
            { text: '学习路径', link: '/courses/learning-path' },
            { text: '实战案例课', link: '/courses/case-studies' }
          ]
        }
      ]
    },
    footer: {
      message: '© 2025 梧桐GIS · 制图 · 遥感 · 空间分析',
      copyright: 'All rights reserved.'
    },
    outline: 'deep'
  },
  cleanUrls: true
})




