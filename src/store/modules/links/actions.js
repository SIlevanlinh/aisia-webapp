const removeLink = (context, link) => {
    context.commit("REMOVE_LINK", link)
}

const removeAll = ({commit}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('REMOVE_ALL')
            resolve()
        }, 1500) 
     })
}

export default {
    removeLink,
    removeAll
}