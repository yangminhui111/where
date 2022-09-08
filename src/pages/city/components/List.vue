<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div 
            class="button-wrapper" 
            v-for="item of hotCities" 
            :key="item.id" 
            :ref="key"
            @click="handleCityClick(item.name)"
            >
              <div class="button">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item,index) of cities" :key="index" :ref="key">
          <div class="title border-topbottom">{{ key }}</div>
          <div class="item-list">
            <div
              class="item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
            >
              {{ innerItem.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import Bscroll from "better-scroll";
export default {
    name: 'CityList',
    props:['cities','hotCities','letter'],
    methods:{
      handleCityClick(city){
        this.$store.commit(("changeCity",city))
        this.$router.push("/")
      }
    },
    watch:{
      letter(){
        if(this.letter){
          const element=this.$refs[this.letter][0];
          this.scroll=new Bscroll(this.$refs.wrapper)
          this.scroll.scrollToElement(element)
        }
      }
    },
    mounted(){
      console.log("this.$store",this.store);
    }

}
</script>

<style lang="less" scoped>
@import '@/assets/styles/varibles.less';

.list {
    overflow: hidden;
    overflow-y:scroll;
    position: absolute;
    top: 1.68rem;
    left: 0;
    right: 0;
    bottom: 0;
    // background: #f00;
    
}
::-webkit-scrollbar{
    display: none
}

.title {
    line-height: .54rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
}

.button-list {
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
}

.button-wrapper {
    float: left;
    width: 33.33%;
}

.button {
    margin: .1rem;
    padding: .1rem 0;
    text-align: center;
    border: .02rem solid #ccc;
    border-radius: .06rem;
}

.item-list .item {
    line-height: .76rem;
    padding-left: .2rem;
}
</style>