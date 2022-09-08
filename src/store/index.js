import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity='上海'
try{
  if(localStorage.city){
    defaultCity=localStorage.city
  }
}catch(e){
  console.log("你好")
}
export default new Vuex.Store({
  state: {
    city:defaultCity
  },
  // getters: {
  // },
  mutations: {
    changeCity(state,city){
      state.city=city
      try{
        localStorage.city=city
      }catch(e){
        console.log("你好")
      }
      localStorage.city=city
    }
  },
  // actions: {
  //   changeCity(ctx,city){
  //     ctx.commit(this.changeCity,city)
  //   }
  // },
  modules: {
    
  }
})
