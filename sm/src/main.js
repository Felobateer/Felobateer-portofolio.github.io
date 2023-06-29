import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    registered: false,
    cartItems: [],
  },
  mutations: {
    setRegistered(state, value) {
      state.registered = value;
      localStorage.setItem("registered", value);
    },
    addToCart(state, product) {
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    incrementCartItem(state, product) {
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decrementCartItem(state, product) {
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity--;
        if (existingProduct.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== product.id
          );
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
    setLogOut(state, value) {
      state.registered = value;
      localStorage.setItem("registered", value);
    },
  },
  actions: {
    updatedRegistered({ commit }, value) {
      commit("setRegistered", value);
    },
    addItemToCart({ commit }, item) {
      commit("addToCart", item);
    },
    removeItemFromCart({ commit }, itemId) {
      commit("removeFromCart", itemId);
    },
    incrementCartItem({ commit }, product) {
      commit("incrementCartItem", product);
    },
    decrementCartItem({ commit }, productId) {
      commit("decrementCartItem", productId);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
    updateLogOut({ commit }) {
      commit("setLogOut");
    },
  },
  getters: {
    cartItemCount: (state) => state.cartItems.length,
    cartTotal: (state) => {
      return state.cartItems.reduce((total, item) => {
        return total + item.price;
      }, 0);
    },
  },
});

// Initialize the registered and cartItems data on app startup
store.state.registered = localStorage.getItem("registered") === "true";
const cartData = localStorage.getItem("cartItems");
store.state.cartItems = cartData ? JSON.parse(cartData) : [];

// Subscribe to changes in registered and cartItems and update localStorage accordingly
store.subscribe((mutation, state) => {
  if (mutation.type === "setRegistered") {
    localStorage.setItem("registered", state.registered);
  } else if (
    mutation.type === "addToCart" ||
    mutation.type === "removeFromCart" ||
    mutation.type === "incrementCartItem" ||
    mutation.type === "decrementCartItem" ||
    mutation.type === "clearCart"
  ) {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }
});

export default store;

createApp(App).use(router).use(Vuex).use(store).mount("#app");
