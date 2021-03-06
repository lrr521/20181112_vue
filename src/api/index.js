/*
    n条接口请求数据函数的模板
    函数的返回值：promise对象
*/

import ajax from './ajax.js'

// const BASE_URL = 'http://localhost:4000';

const BASE_URL = '/api';

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodsCategorys = () => ajax(BASE_URL + '/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', { longitude, latitude })
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShops = (geohash, keyword) => ajax(BASE_URL + '/search_shops', { geohash, keyword })
// [5、获取一次性验证码](#5获取一次性验证码)<br/>
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
// [7、发送短信验证码](#7发送短信验证码)<br/>