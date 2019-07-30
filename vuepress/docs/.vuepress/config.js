module.exports = {
  title: "测试文档", // 设置网站标题
  description: "node",
  base: "/",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "课堂", link: "/ke/" },
      { text: "辅导", link: "/fudao/" },
      {
        text: "Languages",
        items: [
          { text: "Chinese", link: "/language/chinese" },
          { text: "English", link: "/language/English" }
        ]
      }
    ],
    sidebar: {
      "/ke": [
        {
          title: "ke1",
          collapsable: true,
          children: ["/ke/page1","/ke/page2"]
        },
        {
          title: "ke2",
          collapsable: true,
          children: ["/ke/page1","/ke/page2"]
        }
      ],
      "/fudao": [
        {
          title: "辅导1",
          collapsable: true,
          children: ["/fudao/page1","/fudao/page2"]
        },
        {
          title: "辅导2",
          collapsable: true,
          children:  ["/fudao/page1","/fudao/page2"]
        }
      ]
    },
    sidebarDepth: 2,
    serviceWorker: true
  }
};
