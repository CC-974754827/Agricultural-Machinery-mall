<template>
  <div>
  <!--导航-->
    <div>
      <van-nav-bar title="首页" class="nav-title">
      <!--slot插槽-->
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    </div>
  <!--轮播图-->
    <div class="carousel">
      <van-swipe :autoplay="3000">   <!--自动播放时间-->
        <van-swipe-item classs="carousel-item" v-for="(item, index) in carouselItems" :key="index">
          <img v-lazy="item.imgSrc">
        </van-swipe-item>
      </van-swipe>
    </div>
  <!--热门商品-->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in hotItems" :key="index" >
          <div class="hot-swiper-content">
            <img :src="item.img" alt="">
            <div>{{ item.name }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div> 
  </div>

</template>

<script>
  // 组件挂载
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';    //ES6语法
  export default {
    data(){
      return{
        // 轮播图
        carouselItems:[
          {
            name:'img1',
            imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2429161965,843780515&fm=26&gp=0.jpg'
          },{
            name:'img2',
            imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543767888945&di=79dee5a4d1753d8c8d84f51534f683af&imgtype=0&src=http%3A%2F%2Fimg.idol001.com%2Forigin%2F2018%2F09%2F09%2F47fd18bfd16a4ae5f648b1ce86e420ca1536465476_watermark.jpg'
          }
        ],
        // 热门商品
        hotItems:[
          {
            name: '公子景',
            for: '《倩女幽魂》',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543767888945&di=79dee5a4d1753d8c8d84f51534f683af&imgtype=0&src=http%3A%2F%2Fimg.idol001.com%2Forigin%2F2018%2F09%2F09%2F47fd18bfd16a4ae5f648b1ce86e420ca1536465476_watermark.jpg'
          },
          {
            name: '沈巍',
            for: '《镇魂》',
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=111963942,3507430848&fm=26&gp=0.jpg'
          },
          {
            name: '傅红雪',
            for: '《新边城浪子》',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543770709526&di=a4911d018245e484b6dc6fc94a96da68&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F9c069275d4a7deed1d88714f8743e4015e3f9271.jpg'
          },
          {
            name: '夜尊',
            for: '《镇魂》',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3530900864,3471431273&fm=26&gp=0.jpg'
          },
          {
            name: '齐衡',
            for: '《知否》',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543770875636&di=d776c6ea9ba6a11314304784092a6b32&imgtype=0&src=http%3A%2F%2Fimg.popo.cn%2Fuploads%2F782%2F245%2F1531845704166644.jpg'
          }
        ],
        swiperOption:{
          slidesPerView:2
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }

</script>

<style lang="scss">
  .nav-title{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
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

  .hot{
    &-title{
      width: 100%;
      height: 0.5rem;
      padding-left: 0.2rem;
      padding-top: 1.5rem;
      line-height: 0.5rem;
    }
    &-swiper{
      &-content{
        width: 3rem;
        text-align: center;
        img{
          width: 2.5rem;
          height: 1.5rem;
        }
      }
    }
  }
</style>