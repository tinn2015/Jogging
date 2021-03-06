import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.less'
import './assets/markdown.less'
import { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu, ElButton } from 'element-plus'
import Acode from './components/ACode.vue'
const app = createApp(App)
app.component(ElMenu.name, ElMenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElMenuItemGroup.name, ElMenuItemGroup)
app.component(ElSubmenu.name, ElSubmenu)
app.component(ElButton.name, ElButton)
app.component(Acode.name, Acode)

app.use(store).use(router).mount('#app')
