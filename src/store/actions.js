/*
    Action 提交的是 mutation，而不是直接变更状态
    通过 mutation 间接更新state对象
*/
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

import {
    reqAddress,
    reqFoodsCategorys,
    reqShops
} from '../api'

export default {
    // 异步获取商家地址
    async getAddress({ commit, state }) {
        // 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        // 提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, { address })
        }

    },

    // 异步获取食品分类
    async getCategorys({ commit, state }) {
        // 发送异步ajax请求
        const result = await reqFoodsCategorys()
        // 提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, { categorys })
        }
    },

    // 异步获取商家
    async getShops({ commit, state }) {
        // 发送异步ajax请求
        const { longitude, latitude } = state
        const result = await reqShops(longitude, latitude)
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }
    }
}