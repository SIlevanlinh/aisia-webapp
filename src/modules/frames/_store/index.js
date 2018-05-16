import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    frames: [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "http://placehold.it/600/92c952",
            "thumbnailUrl": "http://placehold.it/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "http://placehold.it/600/771796",
          "thumbnailUrl": "http://placehold.it/150/771796"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "officia porro iure quia iusto qui ipsa ut modi",
          "url": "http://placehold.it/600/24f355",
          "thumbnailUrl": "http://placehold.it/150/24f355"
        }    
    ]
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}