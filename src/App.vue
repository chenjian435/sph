<template>
  <div>
  <Header/>
  <!-- 路由出口（展示） -->
  <router-view ></router-view>
  <Footer  v-show="$route.meta.show"/>
</div>
</template>

<script>
//引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
     name:"App",
     components:{
      Header,
      Footer

     }
}
</script>

<style>

</style>