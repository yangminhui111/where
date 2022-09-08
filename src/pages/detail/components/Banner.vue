<template>
    <div>
        <div class="banner"  @click="handleGallary">
        <img src="http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg" alt=""
            class="banner-img">
        <div class="banner-info">
            <div class="banner-title">dfdsfsd</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe70b;</span>
                39
            </div>
        </div>
    </div>
    <common-gallary
     :imgs="imgs" 
     v-show="showGallary"
     @click="handleGallaryClose"
     ></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from '@/common/Gallary.vue'
export default {
    name: 'DetailBanner',
    methods: {
        handleGallary () {
      this.showGallary = true
    },
    handleGallaryClose(){
        this.showGallary=false
    }
    },
    data(){
        return {
            showGallary:false,
            imgs:["http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg","http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg"]
        }
    },
    components:{
        CommonGallary
    }
}
</script>

<style lang="less" scoped>
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
}

.banner-img {
    width: 100%;
}

.banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.banner-title {
    flex: 1;
    font-size: .32rem;
    padding: 0 .2rem;
}

.banner-number {
    height: .32rem;
    line-height: .32rem;
    margin-top: .14rem;
    padding: 0 .4rem;
    border-radius: .2rem;
    background: rgba(0, 0, 0, .8);
    font-size: .24rem;
}

.banner-icon {
    font-size: .24rem;
}
</style>