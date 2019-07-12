import Vue from 'vue'
import app from '../vue/App.vue'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header);
import '../lib/mui/css/mui.min.css'

var vm=new Vue({
    el:'#app',
    date:{

    },
    render:c =>c(app)
})