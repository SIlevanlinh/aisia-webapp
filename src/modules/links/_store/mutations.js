const ADD_LINK = (state, link) => {
    state.links.push(link)
}

const REMOVE_LINK = (state, link) => {
    state.links.splice(link, 1)
}

const REMOVE_ALL = (state, link) => {
    state.links = []
}

export default {
    ADD_LINK,
    REMOVE_LINK,
    REMOVE_ALL
}