import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    links: [
        'http://google.com',
        'http://coursetro.com',
        'http://youtube.com'
    ]
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}