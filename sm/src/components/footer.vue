<template>
  <div class="h-64 w-screen bg-orange-500">
    <div class="flex flex-row">
      <div class="w-1/3 h-44 px-7 pt-4">
        <h1 class="text-2xl text-white font-bold">About</h1>
        <ul>
          <li class="text-lg text-white py-1">
            <router-link to="/about">History</router-link>
          </li>
          <li class="text-lg text-white py-1">
            <router-link to="/about">Location</router-link>
          </li>
          <li class="text-lg text-white py-1">
            <router-link to="/about">Our CEO</router-link>
          </li>
        </ul>
      </div>
      <div class="w-1/3 h-44 px-7 pt-4">
        <h1 class="text-2xl text-white font-bold">Our Products</h1>
        <ul>
          <li class="text-lg text-white py-1">
            <router-link to="/">Offers</router-link>
          </li>
          <li class="text-lg text-white py-1">
            <router-link to="/">Discounts</router-link>
          </li>
          <li class="text-lg text-white py-1">
            <router-link to="/shop">All products</router-link>
          </li>
        </ul>
      </div>
      <div class="w-1/3 h-44 px-7 pt-4">
        <h1 class="text-2xl text-white font-bold">Other</h1>
        <ul>
          <li v-if="!registered" class="text-lg text-white py-1">
            <router-link to="/register">Log-in</router-link>
          </li>
          <li class="text-lg text-white py-1" v-else>
            <button @click="logOut">Log-out</button>
          </li>
          <li class="text-lg text-white py-1">
            <router-link to="/cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-md text-white text-center">
      Feel free to visit our store. Come to:
      <span class="font-italic">
        Otto Lilienthal Str. 12a 28199 Bremen Germany
      </span>
    </p>
    <p class="text-md text-white text-center">@Felobateer-Saadalla</p>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "FooterComponent",
  computed: {
    ...mapState(["registered"]),
  },
  methods: {
    ...mapActions(["updateLogOut"]),
    logOut() {
      this.updateLogOut(false);
    },
  },
};
</script>
<style scoped>
@media (max-width: 450px) {
  div div {
    margin: 0;
    padding: 0;
    height: max-content;
  }

  h1 {
    font-size: 14px;
    padding-left: 4px;
    margin: 0;
  }

  li {
    font-size: 11px;
    padding-left: 4px;
  }

  p {
    font-size: 14px;
  }
}
</style>
