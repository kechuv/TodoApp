import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app.js';
import todos from './modules/todos.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    todos
  }
})
