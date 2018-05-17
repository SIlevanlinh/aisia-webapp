const FRAMES_UPDATED = (state, frames) => {
    state.frames = frames
}

const CURRENT_FRAME_UPDATED = (state, frame) => {
    state.currentFrame = frame
} 

export default {
    FRAMES_UPDATED,
    CURRENT_FRAME_UPDATED
}