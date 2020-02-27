import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // ...
    state: {
        // 用户名
        username: "",
        // 头像
        avatar: ""
    },
    mutations: {
        changeUser(state, val) {
            state.username = val
        },
        changeAvatar(state, val) {
            state.avatar = val
        }
    }
})

export default store
