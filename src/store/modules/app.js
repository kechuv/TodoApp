const state = {
  loading: false
};

const getters = {
  isLoading: state => state.loading
};

const mutations = {
  SET_LOADING: (state, status) => {
    state.loading = status;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}