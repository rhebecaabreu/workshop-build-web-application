import Tasks from '@/api/resources/tasks';

const state = {
  lists: [],
};
  
const getters = {
  lists: () => (state.lists),
};

const actions = {
  fetchLists({ commit, dispatch }) {
    commit('clearLists');
    Tasks.lists().then((response) => {
      console.log(response);
      response.items.forEach((item) => {
        dispatch('fetchListItems', item)
      })
    });
  },
  fetchListItems({ commit }, payload) {
    Tasks.listItems(payload.id).then((response) => {
      response['listId'] = payload.id;
      payload['tasks'] = response;
      commit('setLists', payload);
    });
  },
  addNewTaskItem({ dispatch }, payload) {
    Tasks.insertItem(payload).then(() => {
      dispatch('fetchLists');
    });
  },
};

const mutations = {
  setLists($state, payload) {
    const stateCopy = $state;
    stateCopy.lists = stateCopy.lists.concat(payload);
  },
  clearLists($state) {
    const stateCopy = $state;
    stateCopy.lists = [];
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};