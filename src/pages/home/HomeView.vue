<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
    import axios from 'axios'
    import HomeHeader from './components/Header.vue'
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'
    import HomeRecommend from './components/Recommend.vue'
    import HomeWeekend from './components/Weekend.vue'
    export default {
        name:'HomeHome',
        data(){
            return {
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend,
        },
        methods:{
            getHomeInfo(){
                axios.get('/static/mock/index.json')
                .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res=res.data
                if(res.ret&&res.data){
                    const data=res.data
                    this.swiperList=data.swiperList;
                    this.iconList=data.iconList;
                    this.recommendList=data.recommendList;
                    this.weekendList=data.weekendList;
                }
                console.log(res)
            }
        },
        mounted(){
            this.getHomeInfo()
        }
    }
</script>

<style lang="scss" scoped>

</style>