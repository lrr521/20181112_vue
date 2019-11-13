/*
    更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    直接更改state的对象
*/
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address;
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys;
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops;
    }
}