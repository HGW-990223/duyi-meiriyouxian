import Vue from 'vue'
import _default from 'vuex'
import Vuex from 'vuex'
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,
    user: getUserCookie(),
  },
  mutations: {
    toggleCollapsed (state) {
      state.collapsed = !state.collapsed
    },
    setUserInfo (state, userInfo) {
      state.user = userInfo
    },
    logout (state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      }
    }
  },
  actions: {
    toggleCollapsed (context) {
      context.commit('toggleCollapsed')
    },
    setUserInfo (context, userInfo) {
      context.commit('setUserInfo', userInfo)
      setCookie(userInfo)
    },
    logout (context) {
      context.commit('logout')
      removeUserCookie()
    }
  },
  modules: {
  }
})
