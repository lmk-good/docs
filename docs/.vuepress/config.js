module.exports = {
    base:'/docs/',
    title:'Personal Notes',
    themeConfig: {
      lastUpdated: '上次更新',
      plugins: [
        [
          'vuepress-plugin-comment',
          {
            componentsDir: './components'
          },
    
        //   {
        //     choosen: '/', 
        //     // options选项中的所有参数，会传给Valine的配置
        //     options: {
        //       el: '/message/',
        //       appId: 'zFXhS67KHRvF0TEDc0IDo0pM-gzGzoHsz',
        //       appKey: '4fkGUscEMvJX7L0uWRVPar8x'
        //     }
        //   }
        ]
      ],
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Vue.js', link: '/about/' },
        { text: 'JavaScript', link: '/about/' },
        { text: '留言', link: '/message/' },
        { text: '关于我', link: '/about/' },
        { text: 'External', link: '/about/' },
        { text: 'GitHub', link: '/about/' },
      ]
    }
  }
  