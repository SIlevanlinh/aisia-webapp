import api from '../_api'

const getFrames = (context) => {
    api.fetchFrames
    .then((response) => {
        context.commit('FRAMES_UPDATED', response.data)
    })
    .catch((error) => {
        console.log(error);
    })
}

export default {
    getFrames
}