<template>
  <div class="flex mt-9 mb-11 relative">
    <div class="relative mx-auto">
      <button class="absolute top-1 left-1" aria-hidden="true">
        <i class="fas fa-search text-orange-600"></i>
      </button>
      <input
        v-model="filterName"
        id="search"
        type="text"
        placeholder="Search"
        class="w-96 h-8 mx-auto border-2 border-orange-600 rounded-lg pl-6"
      />
    </div>
  </div>
  <div id="shop" class="w-screen flex flex-row">
    <div id="shopFilters" class="w-1/4 pl-7">
      <div class="flex flex-column flex-wrap">
        <h1 class="text-orange-600 font-bold text-xl w-full mx-2 my-4">
          Categories
        </h1>
        <select v-model="filterCategory">
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value=""
            selected
          >
            Choose a Category
          </option>
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value="chocolate"
          >
            Chocolate
          </option>
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value="ice-cream-cone"
          >
            Ice-cream cone
          </option>
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value="ice-cream-bucket"
          >
            Ice-cream bucket
          </option>
          <option
            id="filterCategorie"
            class="text-orange-700 text-lg px-2"
            value="cake"
          >
            Cake
          </option>
        </select>
      </div>
      <div>
        <h1 class="text-orange-600 font-bold text-xl w-full mx-2 my-4">Size</h1>
        <select v-model="filterSize">
          <option
            id="filterSize"
            class="text-orange-700 text-lg px-2"
            value=""
            selected
          >
            Choose a Size
          </option>
          <option
            id="filterSize"
            class="text-orange-700 text-lg px-2"
            value="single"
          >
            Small size
          </option>
          <option
            id="filterSize"
            class="text-orange-700 text-lg px-2"
            value="family"
          >
            Family size
          </option>
        </select>
      </div>
      <div>
        <h1 class="text-orange-600 font-bold text-xl w-full mx-2 my-4">
          Specials
        </h1>
        <input
          type="checkbox"
          name="discount"
          id="discount"
          class="hidden"
          v-model="filterDiscount"
        />
        <label
          for="discount"
          class="text-orange-700 text-lg px-2 w-full flex flex-row"
        >
          Only discounts
          <span :class="{ hidden: !filterDiscount, block: filterDiscount }"
            >&gt;</span
          >
        </label>
        <input
          type="checkbox"
          name="Offer"
          id="Offer"
          class="hidden"
          v-model="filterOffer"
        />
        <label
          for="Offer"
          class="text-orange-700 text-lg px-2 w-full flex flex-row"
        >
          Offers
          <span :class="{ hidden: !filterOffer, block: filterOffer }"
            >&gt;</span
          >
        </label>
      </div>
      <div>
        <h1 class="text-orange-600 font-bold text-xl w-full mx-2 my-4">
          Price Range
        </h1>

        <input
          placeholder="from"
          class="border-2 border-orange-500 w-14 mx-2 px-2"
          type="text"
          name="price"
          id="min"
          v-model="minPrice"
        />
        <input
          placeholder="to"
          class="border-2 border-orange-500 w-14 mx-2 px-2"
          type="text"
          name="price"
          id="max"
          v-model="maxPrice"
        />
      </div>
    </div>
    <div class="flex flex-wrap w-3/4 justify-end">
      <div v-if="filteredProducts.length === 0">
        <h1 class="text-orange-600 font-bold text-2xl mr-11">
          No Products found that fit this description
        </h1>
      </div>
      <div
        v-else
        class="relative h-96 w-72 m-3"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <img :src="product.img" :alt="product.Name" class="h-72 w-64" />
        <div class="container">
          <h1 class="text-orange-600 font-bold text-2xl" id="productName">
            {{ product.Name }}
          </h1>
          <label
            for="purchase"
            class="text-orange-600 font-bold text-lg absolute bottom-3 left-3"
            >&euro; {{ product.price }}</label
          >
          <button
            @click="handleBuy(product)"
            id="purchase"
            class="bg-orange-500 text-white h-9 rounded-lg absolute bottom-2 right-2 pl-6 group"
          >
            Add to cart
            <span class="pr-2 opacity-0 group-hover:opacity-100"
              ><i class="fas fa-shopping-cart"></i
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ShopPage",
  data() {
    return {
      products: [
        {
          Name: "Milka white chocolate",
          img: require("./pic/white-choco.jpg"),
          id: "wc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka milk chocolate",
          img: require("./pic/milk-choco.jpg"),
          id: "mc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka dark chocolate",
          img: require("./pic/dark-choco.jpg"),
          id: "dc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka hazelnut chocolate",
          img: require("./pic/nut-choco.jpg"),
          id: "hc",
          price: 3.99,
          discount: false,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka Oreo chocolate",
          img: require("./pic/oreo-choco.jpg"),
          id: "oc",
          price: 3.99,
          discount: false,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka biscuit chocolate",
          img: require("./pic/biscuit-choco.jpg"),
          id: "bic",
          price: 3.99,
          dicount: false,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka bubble chocolate",
          img: require("./pic/bubble-choco.jpg"),
          id: "buc",
          price: 3.99,
          discount: false,
          type: "chocolate",
          size: "single",
        },
        {
          Name: "Milka chocolate Jar",
          img: require("./pic/jar-choco.jpg"),
          id: "jc",
          price: 4.99,
          discount: false,
          type: "chocolate",
          size: "family",
        },
        {
          Name: "Ja vanilla ice-cream cone",
          img: require("./pic/vanilla-cone.jpg"),
          id: "vc",
          price: 1.49,
          actualPrice: 2.99,
          discount: true,
          type: "ice-cream-cone",
          size: "single",
        },
        {
          Name: "Ja chocolate ice-cream cone",
          img: require("./pic/choco-cone.jpg"),
          id: "cc",
          price: 1.49,
          actualPrice: 2.99,
          discount: true,
          type: "ice-cream-cone",
          size: "single",
        },
        {
          Name: "Ja 3 flavor ice-cream bucket",
          img: require("./pic/3flavor-bucket.jpg"),
          id: "3b",
          price: 4.99,
          discount: false,
          type: "ice-cream-bucket",
          size: "family",
        },
        {
          Name: "Piece of chocolate cake (250g)",
          img: require("./pic/pcake.jpg"),
          id: "Cc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "cake",
          size: "single",
        },
        {
          Name: "Piece of fruit cake (250g)",
          img: require("./pic/fruitcake.jpg"),
          id: "fc",
          price: 1.99,
          actualPrice: 3.99,
          discount: true,
          type: "cake",
          size: "single",
        },
        {
          Name: "Birthday Cake (1120g)",
          img: require("./pic/birthday.jpg"),
          id: "bc",
          price: 9.99,
          actualPrice: 19.99,
          discount: true,
          type: "cake",
          size: "family",
        },
        {
          Name: "Chocolate cake (1500g)",
          img: require("./pic/pcake.jpg"),
          id: "PC",
          price: 19.99,
          discount: false,
          type: "cake",
          size: "family",
        },
        {
          Name: "Fruit cake (1500g)",
          img: require("./pic/fruitcake.jpg"),
          id: "FC",
          price: 19.99,
          discount: false,
          type: "cake",
          size: "family",
        },
        {
          Name: "Small weekend snack mix",
          img: require("./pic/weekend-snack0.jpg"),
          id: "w0",
          price: 12.49,
          discount: false,
          type: "offer",
          size: "single",
        },
        {
          Name: "Medium weekend snack mix",
          img: require("./pic/weekend-snack.jpg"),
          id: "w1",
          price: 24.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "Big weekend snack mix",
          img: require("./pic/weekend-snack2.jpg"),
          id: "w2",
          price: 39.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "The 2 in 1 deal",
          img: require("./pic/2in1.jpg"),
          id: "2in1",
          price: 14.99,
          discount: false,
          type: "offer",
          size: "single",
        },
        {
          Name: "The 3 chocolate deal",
          img: require("./pic/3choco.jpg"),
          id: "ccc",
          price: 14.99,
          discount: false,
          type: "offer",
          size: "single",
        },
        {
          Name: "Haloween",
          img: require("./pic/haloween.jpg"),
          id: "haloween",
          price: 59.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "Summer Bundle",
          img: require("./pic/summer-bundle.jpg"),
          id: "sb",
          price: 54.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "The birthday offer",
          img: require("./pic/birthday.jpg"),
          id: "birthday",
          price: 34.99,
          discount: false,
          type: "offer",
          size: "family",
        },
        {
          Name: "Party Sweets",
          img: require("./pic/party-sweets.jpg"),
          id: "ps",
          price: 49.99,
          discount: false,
          type: "offer",
          size: "family",
        },
      ],
      filterName: "",
      filterCategory: "",
      filterSize: "",
      filterDiscount: false,
      filterOffer: false,
      minPrice: "",
      maxPrice: "",
    };
  },
  methods: {
    ...mapActions(["addItemToCart"]),
    handleBuy(product) {
      this.addItemToCart(product);
    },

    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
  computed: {
    filteredProducts() {
      let filtered = this.shuffle(this.products);

      if (this.filterName) {
        filtered = filtered.filter((product) =>
          product.Name.toLowerCase().includes(
            this.filterName.toLocaleLowerCase()
          )
        );
      }

      if (this.filterCategory) {
        filtered = filtered.filter(
          (product) => product.type === this.filterCategory
        );
      }

      if (this.filterSize) {
        filtered = filtered.filter(
          (product) => product.size === this.filterSize
        );
      }

      if (this.filterDiscount) {
        filtered = filtered.filter((product) => product.discount);
      }

      if (this.filterOffer) {
        filtered = filtered.filter((product) => product.type === "offer");
      }

      if (this.minPrice) {
        filtered = filtered.filter((product) => product.price > this.minPrice);
      }

      if (this.maxPrice) {
        filtered = filtered.filter((product) => product.price < this.maxPrice);
      }

      return filtered;
    },
  },
};
</script>
<style scoped>
#shop {
  min-height: 60vh;
}

#productName {
  font-family: "Lora", serif;
}

@media (max-width: 450px) {
  #shop {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: auto;
  }

  #shopFilters {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: auto;
  }
}
</style>
