import VueRouter from 'vue-router'

import home from '../vue/home.vue'
import member from '../vue/member.vue'
import shopcar from '../vue/shopcar.vue'
import search from '../vue/search.vue'

var router=new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
    ],
    linkActiveClass:'mui-active'
})

export default router;