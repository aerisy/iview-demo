import iviewNav from "./views/iviewNav.vue"
import demo1 from "./views/demo/demo1.vue"
import demo2 from "./views/demo/demo2.vue"
import demo3 from "./views/demo/demo3.vue"
import demo4 from "./views/demo/demo4.vue"
import demo5 from "./views/demo/demo5.vue"

const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/iview',
        // name:'iviewNav',
        meta: {
            title: 'iview导航测试'
        },
        component: iviewNav,
        children:[
            {
                path:'demo1',
                name:'demo1',
                component:demo1
            },{
                path:'demo2',
                name:'demo2',
                component:demo2
            },{
                path:'demo3',
                name:'demo3',
                component:demo3
            },{
                path:'demo4',
                name:'demo4',
                component:demo4
            },{
                path:'demo5',
                name:'demo5',
                component:demo5
            }
        ]
    }
];
export default routers;