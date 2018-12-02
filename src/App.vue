<template>
  <div id="app">
    
    <router-view></router-view>
    <!--v-model双向数据绑定-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="profile">我的</van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script>
  export default{
    data(){
      return{
        active: 0
      }
    }
  }
</script>

<style lang="scss">
.footer-bar{
  display: flex;
  background: #eee;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 1rem;
  line-height: 1rem;
  &-item{
    flex-grow: 1;
    text-align: center;
  }
}

</style>
