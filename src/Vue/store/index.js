import Vue from 'Vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listId: [],
    },
    mutation: {},
    getters: {
        getListId: store => store.listId,
    },
    actions: {}
});