import Vue from 'vue'
import app from '../vue/App.vue'
import router from './router.js'

import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

var vm=new Vue({
    el:'#app',
    date:{

    },
    render:c =>c(app),
    router
})