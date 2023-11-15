export const state = () => ({
    sidebar: true,

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