import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: "",
    items: [],
    products: [
      {
        id: 1,
        name: "Apple",
        price: 20,
        quantity: 10,
        url: require("./../assets/img/apple.jpg"),
      },
      {
        id: 2,
        name: "Orange",
        price: 10,
        quantity: 14,
        url: require("./../assets/img/orange.jpg"),
      },
      {
        id: 3,
        name: "Watermelon",
        price: 15,
        quantity: 14,
        url: require("./../assets/img/watermelon.jpg"),
      },
      {
        id: 4,
        name: "Mango",
        price: 11,
        quantity: 12,
        url: require("./../assets/img/mango.jpg"),
      },
      {
        id: 5,
        name: "Pineapple",
        price: 17,
        quantity: 12,
        url: require("./../assets/img/pineapple.jpg"),
      },
      {
        id: 6,
        name: "Strawberry",
        price: 5,
        quantity: 10,
        url: require("./../assets/img/strawberry.jpg"),
      },
      {
        id: 7,
        name: "Banana",
        price: 20,
        quantity: 20,
        url: require("./../assets/img/banana.jpg"),
      },
      {
        id: 8,
        name: "Cherry",
        price: 12,
        quantity: 12,
        url: require("./../assets/img/cherry.jpg"),
      },
      {
        id: 9,
        name: "Dragonfruit",
        price: 12,
        quantity: 12,
        url: require("./../assets/img/dragon-fruit.jpg"),
      },
      {
        id: 10,
        name: "Grape",
        price: 23,
        quantity: 12,
        url: require("./../assets/img/grape.jpg"),
      },
    ],
  },
  mutations: {
    SET_SEARCH(state, payload) {
      state.search = payload;
    },
    SET_ITEMS(state, payload) {
      // state.items = payload;
      state.items.push(payload);
    },
  },
  actions: {
    setSearch({ commit }, payload) {
      commit("SET_SEARCH", payload);
    },
    setItems({ commit }, payload) {
      commit("SET_ITEMS", payload);
    },
  },
  getters: {
    search: (state) => {
      return state.search;
    },
    items: (state) => {
      return state.items;
    },
    total: (state) => {
      let total = 0;
      state.items.forEach((res) => {
        total += res.price;
      });
      return total;
    },
    products: (state) => {
      return state.products;
    },
  },
  modules: {},
});
