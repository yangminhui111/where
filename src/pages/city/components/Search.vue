<template>
    <div>
        <div class="search">
        <input 
        type="text" 
        class="search-input" 
        placeholder="输入城市名或拼音"
        v-model="keyword"
        >
    </div>
    <div class="search-content" v-show="keyword">
        <ul>
            <li 
            v-for="item of list" 
            :key="item.id"
            class="item-search"
            >{{item.name}}</li>
            <li v-show="hasNoData" class="item-search"
            >没有找到匹配数据</li>
        </ul>
    </div>
    </div>
</template>

<script>

    export default {
        name:'CitySearch',
        data(){
            return {
                keyword:'',
                list:[],
                timer:null
            }
        },
        props:{
            cities:Object
        },
        computed:{
            hasNoData(){
                return !this.list.length
            }
        },
        watch:{
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list=[]
                    return
                }
                this.timer=setTimeout(()=>{
                    const result=[];
                    for(let i in this.cities){
                        this.cities[i].forEach((value)=>{
                            //循环遍历城市，筛选出符合的城市
                            if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                                result.push(value)
                            }
                        })
                    }
                    this.list=result
                },100)
            }
        }
    }
</script>

<style lang="less" scoped>
@import '@/assets/styles/varibles.less';
.search{
    height: .72rem;
    padding: .1rem .1rem .3rem .1rem;
    background: @bgColor;
}
.search-input{
    box-sizing: border-box;
    width: 100%;
    height: .62rem;
    padding: .1rem;
    line-height: .62rem;
    text-align: center;
    border-radius: .06rem;
    color: #666;
}
.search-content{
    z-index: 1;
    
    overflow: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 1.63rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
}
.item-search{
    line-height: .62rem;
    padding-left: .2rem;
    background: #fff;
    color: #666;
    border-bottom: #ccc;
}
</style>