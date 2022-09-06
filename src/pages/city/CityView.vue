<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCities="hotCities" :cities="cities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/Header.vue'
    import CitySearch from './components/Search.vue'
    import CityList from './components/List.vue'
    import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
    export default {
        name:'CityView',
        data(){
            return {
                cities:[],
                hotCities:[]
            }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        methods:{
            getCityInfo(){
                axios.get('/static/mock/city.json')
                .then(this.getCityInfoSucc)
            },
            getCityInfoSucc(res){
                console.log(res)
                res=res.data;
                if(res.ret&&res.data){
                    const data=res.data;
                    this.cities=data.cities;
                    this.hotCities=data.hotCities
                }
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>

<style lang="less" scoped>

</style>