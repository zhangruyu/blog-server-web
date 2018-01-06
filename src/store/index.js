import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import * as mutations from './mutations'
Vue.use(Vuex)

const state = {
    username: '',
    role: ''
}

export default new Vuex.Store({
    state,
    getters,
    mutations
})