import VueRouter from 'vue-router'
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from "@/pages/Login"
import Register from '@/pages/Register'
//配置路由
export default new VueRouter({
   //配置路由
   routes:[
    //重定向，在项目跑起来的时候，访问/ ，立马让他重定向到首页
    {
             path:'/',
             redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    },
    {
        path:'/search',
        component:Search,
        meta:{show:true}
    },
    {
        path:'/login',
        component:Login,
        meta:{show:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    },

   ]


})
