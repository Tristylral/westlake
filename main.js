import { createApp } from 'vue'
import App from './App.vue'
import './styles/start.scss'
//导入路由
import router from './router'
//挂载store
import store from './store';
//导入element plus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//导入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入element plus国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//导入动画库aniamte
import "animate.css"
//导入默认主题
import "./styles/default.css";
//评论
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
//创建实例
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, {
  locale: zhCn,
})
// 跳转后返回顶部
 router.afterEach((to,from,next) => {
      window.scrollTo(0,0);
 })
app.use(ElementPlus).use(router).use(UndrawUi).use(store).mount('#app')
