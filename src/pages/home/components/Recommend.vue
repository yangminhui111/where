<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" class='item-img' />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'HomeRecommend',
        props:{
            recommendList:Array
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
.item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    border-bottom: 1px solid #ccc;
}
.item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
}
.item-info{
    flex: 1;
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
.item-button{
    line-height: .44rem;
    margin-top: .16rem;
    background: #ff9300;
    padding: .1rem .2rem;
    border-radius: .06rem;
    color: #fff;
}
</style>