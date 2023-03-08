module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  base:'/hello-VuePress/',
  themeConfig: {
    logo: '/assets/img/logo.png',
  },
  configureWebpack: {
    resolve: {
      alias: {},
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
      { text: "External", link: "https://google.com" },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: '中文', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
        ['/', '首页'],
        ['/guide', '指导'],
        ['/hello', 'Explicit link text']
    ]
  },
};
