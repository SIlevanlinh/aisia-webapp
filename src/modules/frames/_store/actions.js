import api from '../_api'

const getFrames = (context) => {
    api.fetchFrames
    .then((response) => {
        context.commit('FRAMES_UPDATED', response.data.slice(0, 2))
    })
    .catch((error) => {
        console.log(error);
    })
}

const updateCurrentFrame = (context, frame) => {
    context.commit('CURRENT_FRAME_UPDATED', frame)
}

export default {
    getFrames,
    updateCurrentFrame
}