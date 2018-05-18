const frames = state => state.frames

const firstFrame = state => state.frames.find(frame => frame.id === 1)

const getFrameById = (state) => (id) => {
    return state.frames.find(frame => frame.id === id)
}

const currentFrame = state => state.currentFrame

export default {
    frames,
    firstFrame,
    currentFrame,
    getFrameById
}