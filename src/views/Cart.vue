<template>
  <div class="container">
    <!--导航-->
    <div>
      <van-nav-bar
        title = "购物车"
        left-text = "返回"
        left-arrow
        @click-left = "onClickLeft"
      />
    </div>
    <!--商品信息-->
    <div class="list">
      <div v-for="(item, index) in cartItem" :key="index">
        <van-card
          :num="item.num"
          :price="item.price"
          :desc="item.des"  
          :title="item.name"
          :thumb="item.img"
        />
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js';
export default {
  data(){
    return{
      cartItem:[]
    }
  },
  created(){
    let url1 = url.getCartItem;
    axios.get(url1).then(res=>{
      console.log("购物车商品信息加载完成");
      this.cartItem = res.data;
    });
  },
  methods:{
    onClickLeft(){
      console.log("返回");
    }
  }
}
</script>

<style lang="scss">
  .container{
    background-color: #eee;
  }
  .nav-title{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999!important; 
  }
  .carousel{
    margin-top: 0.8rem;
    height: 3rem;
    &-item{
      img{
        width: 100%;
        height: 3rem;
      }
    }
  }
  .list{
    margin-bottom: 1.2rem;
  }
</style>