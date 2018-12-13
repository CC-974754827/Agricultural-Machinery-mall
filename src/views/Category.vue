<template>
  <div class="container">
    <!--导航-->
    <div>
      <van-nav-bar
        title = "分类"
        left-text = "返回"
        left-arrow
        @click-left = "onClickLeft"
      />
    </div>
  </div>
</template>

<script>
export default {
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
</style>