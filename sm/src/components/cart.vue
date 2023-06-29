<template>
  <div class="w-screen relative" id="cart">
    <div class="w-full border-b-2 border-gray-300 my-4">
      <h1 class="text-4xl text-orange-600 px-4 my-2">Cart</h1>
    </div>
    <div
      id="shoppinglist"
      class="w-full h-96 overflow-y-scroll flex-row-reverse"
    >
      <div v-if="cartItems.length === 0">
        <h1 class="text-orange-600 text-lg mx-2 mt-6">
          Your shopping cart is empty
        </h1>
      </div>
      <div
        v-else
        v-for="item in cartItems"
        :key="item.id"
        id="cartItem"
        class="my-2 flex flex-row relative mx-auto"
      >
        <div class="pt-5">
          <h1 class="text-xl text-orange-600">{{ item.quantity }}</h1>
        </div>
        <div class="flex w-2/5">
          <img :src="item.img" :alt="item.Name" class="h-16 w-16 mx-6" />
          <h1 class="text-orange-600 text-lg mx-2 mt-6">{{ item.Name }}</h1>
        </div>
        <div class="w-1/5 flex">
          <div class="flex-row justify-content">
            <button
              @click="decrement(item)"
              class="bg-red-500 px-3 h-9 rounded-lg hover:bg-red-700"
            >
              -
            </button>
            <button class="px-2">&euro; {{ item.price }}</button>
            <button
              @click="increment(item)"
              class="bg-green-500 px-3 h-9 rounded-lg hover:bg-green-600"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="shoppingFooter"
      class="relative w-full border-t-2 border-gray-300 flex justify-end py-4 pr-4"
    >
      <h1 class="absolute left-24 text-2xl text-orange-600">
        Total: &euro;{{ total }}
      </h1>
      <button
        id="cartReset"
        @click="reset"
        class="text-lg mx-2 px-1 rounded-lg w-18 h-9 bg-red-600 text-white hover:px-4"
      >
        Remove all products
      </button>
      <button
        id="cartFinish"
        class="text-lg mx-2 px-1 rounded-lg w-18 h-9 bg-orange-500 text-white hover:px-4"
      >
        Proceed to payment
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ShoppingCart",

  computed: {
    ...mapState(["cartItems"]),
    total() {
      return this.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    ...mapActions(["incrementCartItem", "decrementCartItem", "clearCart"]),
    increment(product) {
      this.incrementCartItem(product);
    },
    decrement(product) {
      this.decrementCartItem(product);
    },
    reset() {
      this.clearCart();
    },
  },
};
</script>
<style scoped>
#cart {
  height: 62vh;
}

#cartItem {
  width: 90%;
}

@media (max-width: 450px) {
  #shoppinglist {
    height: 320px;
  }

  #shoppingFooter {
    height: 12vh;
  }

  #shoppingFooter button {
    position: absolute;
    bottom: 0;
  }

  #cartReset {
    left: 10px;
  }
}
</style>
