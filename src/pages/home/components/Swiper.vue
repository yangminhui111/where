<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of swiperList" :key="item.id">
     
      <img class="swiper-pagination" :src="item.imgUrl" alt=''/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name:'HomeSwiper',
    props:{
      swiperList:Array
    },
    data(){
      return{
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        }
      }
    },
    computed:{
      showSwiper(){
        return this.swiperList.length
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper{
    width: 100%;
    height: 40%;
    
  }
  .swiper-pagination{
    width: 100%;
  }
</style>