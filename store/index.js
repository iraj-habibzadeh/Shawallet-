export const state = () => ({
    sidebar: false,

}
)
export const actions = {

}
export const mutations = {
    SET_SIDEBAR(state, sidebar) {
        console.log(state, 'state,')
        state.sidebar = sidebar
    }
};
// export const mutated = (() => {

// })
