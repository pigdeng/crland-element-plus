import hljs from 'highlight.js'
// 代码高亮样式，如果需要其它的样式，在'node_modules/highlight.js/styles'目录找其他的css文件导入即可
import 'highlight.js/styles/googlecode.css'

export default {
  install (Vue) {
    // highlight
    // Vue.directive('highlight', {
    //   inserted: el => {
    //     let blocks = el.querySelectorAll('pre code')
    //     blocks.forEach((block) => {
    //       hljs.highlightBlock(block)
    //     })
    //   },
    //   componentUpdated: (el, binding) => {
    //     console.log('binding', binding)
    //     console.log('componentUpdated')
    //     let blocks = el.querySelectorAll('pre code')
    //     blocks.forEach((block) => {
    //       hljs.highlightBlock(block)
    //     })
    //   }
    // })
  }
}
