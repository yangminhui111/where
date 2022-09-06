<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="" />
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:'HomeIcons',
        props:{
            iconList:Array
        },
    data(){
      return{
        swiperOption:{
            autoplay:false
        }
      }
    },
        computed:{
            // 分页，像焦点轮播图一样翻页
            pages(){
                const pages=[];
                this.iconList.forEach((item,index)=>{
                    const page=Math.floor(index/8)
                    // 如果没有子元素就创建一个空数组
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    // 如果有就添加，数组长度等于8就重新创建一个数组
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="less" scoped>
@import '@/assets/styles/varibles.less';

.icons {
    margin-top: .1rem;
}

.icon {
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
}

.icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    box-sizing: border-box;
    padding: .1rem;
}

.icon-img-content {
    height: 100%;
    display: block;
    margin: 0 auto;
}

.icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>