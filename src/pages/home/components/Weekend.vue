<template>
    <div>
        <div class="title">
            周末去哪
        </div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" class='item-img' />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'HomeWeekend',
        data(){
            return {
                recommendList:[
                {
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg',
                    title:'大连圣亚海洋世界',
                    desc:'浪漫大连首站，浪漫的海洋主题公园'
                },
                {
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
                    title:'大连圣亚海洋世界',
                    desc:'浪漫大连首站，浪漫的海洋主题公园'
                },
                {
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
                    title:'大连圣亚海洋世界',
                    desc:'浪漫大连首站，浪漫的海洋主题公园'
                },
            ]
            }
        }
    }
</script>

<style lang="less" scoped>
.title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
}
.item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
}
.item-img{
    width: 100%;
}
.item-info{
    padding: .1rem;
}
.item-title{
    line-height: .54rem;
    font-size: .32rem;
    
}
.item-desc{
    line-height: .4rem;
    color: #ccc;
}
</style>