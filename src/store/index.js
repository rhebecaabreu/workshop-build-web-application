import Vue from 'vue';
import Vuex from 'vuex';

import User from './modules/user';
import Tasks from './modules/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    Tasks
  },
});
