

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
    conatctList: [{ id: 1, name: "yamaan", email: "yamaan@gmail.com", createdDate: "2020-11-11 9:44:28", modifiedDate: "2020-11-11 9:44:28" },
    { id: 2, name: "azlaan", email: "azlaan@gmail.com", createdDate: "2020-11-11 9:44:28", modifiedDate: "2020-11-11 9:44:28" }]

  },

  mutations: {
   
    addContact: (state, payload) => {

      state.conatctList.push(payload);
    },

    editContact: (state, payload) => {

      const index = state.conatctList.findIndex(info => info.id == payload.id)
      state.conatctList[index].name = payload.name;
      state.conatctList[index].email = payload.email;
      state.conatctList[index].modifiedDate = payload.modifiedDate;

    },
    deleteContact: (state, payload) => {
      let updatedState = state.conatctList.filter((info) =>
        info.id != payload.payload
      )
      state.conatctList = updatedState;
    }
  },

  actions: {

    addContact({ commit }, payload) {

      return new Promise((resolve, reject) => {
        commit("addContact", payload.payload);
        resolve()
      })


    },
    editContact({ commit }, payload) {

      return new Promise((resolve, reject) => {
        commit("editContact", payload.payload);
        resolve()
      })
    }


  },
  // modules: {
  // }
})
