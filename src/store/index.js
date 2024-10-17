import { createStore } from 'vuex';

const store = createStore({
  state: {
    searchQuery: '',
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    updateSearchQuery({ commit }, query) {
      commit('setSearchQuery', query);
    },
  },
  getters: {
    getSearchQuery: (state) => state.searchQuery,
  },
});

export default store;
