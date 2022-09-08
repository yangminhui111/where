<template>
    <div class="container" @click="hangleGallaryCLick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default(){
                return ["http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg","http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg"]
            }
        }
    },
    
    data(){
        return {
            swiperOptions:{
                pagination:'swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        hangleGallaryCLick(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="less" scoped>
// .container >>> .swiper-container
//     overflow: inherit
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
}

.wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
}

.gallary-img {
    width: 100%;
}

.swiper-pagination {
    color: #fff;
    bottom: -1rem;
}
</style>