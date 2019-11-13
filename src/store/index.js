/*
    组装模块并导出 store 的地方
    最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex' 
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})