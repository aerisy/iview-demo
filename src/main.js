import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
// import common from './libs/common';
import axios from 'axios'
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(axios);
//后端地址
axios.defaults.baseURL = 'http://rapapi.org/mockjsdata/21170';
Vue.prototype.$http = axios;

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


new Vue({
    el: '#app',
    router: router,
    axios,
    /*methods: {
        axiosAjax(options){
            common.ajax(options);
        }
    },*/
    render: h => h(App)
});
