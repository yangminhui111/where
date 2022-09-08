<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe62d;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'HomeHeader',
    props:{
        city:String
    },
    mounted(){
        console.log(this.$store)
    },
    computed:{
        ...mapState(['city'])
    }
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/varibles.less';
.header {
    display: flex;
    align-items: center;
    height:@headerHeight;
    background:@bgColor;
    color:#fff;
}

.header-left {
    width: .64rem;
    float:left;
    text-align: center;
}

.header-input {
    flex: 1;
    padding-left: .3125rem;
    line-height: .64rem;
    height: .64rem;
    margin-left: .2rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
}

.header-right {
    width: 1.24rem;
    float:right;
    text-align: center;
    color: #fff;
}
.arrow-icon{
    margin-left: -.04rem;
    font-size: .24rem;
}
</style>