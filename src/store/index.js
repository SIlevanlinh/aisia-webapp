import Vue from 'vue'
import Vuex from 'vuex'
import links from './modules/links'

// import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        links
    }
})