import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    frames: [],
    currentFrame: {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952"
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}