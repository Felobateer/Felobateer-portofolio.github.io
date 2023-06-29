<template>
  <div id="registerPage" class="w-screen flex">
    <div class="m-auto h-96 w-96 border-2 border-gray-400 relative">
      <h1 class="text-5xl font-bold text-orange-600 pl-4 pt-2">Register</h1>
      <form class="p-11" method="POST">
        <label class="text-2xl font-bold text-orange-600" for="username"
          >Username:</label
        >
        <input
          class="py-4 px-2 my-4 rounded-lg border-2 border-orange-500 w-72 h-11"
          id="username"
          type="text"
          placeholder="enter your username here"
          required
        />
        <label class="text-2xl font-bold text-orange-600" for="password"
          >Password:</label
        >
        <input
          class="py-4 px-2 my-4 rounded-lg border-2 border-orange-500 w-72 h-11"
          id="password"
          type="password"
          placeholder="enter your password here"
          required
        />
        <button
          @click.prevent="handleSubmit"
          type="submit"
          class="bg-sky-500 text-white absolute right-1 bottom-2 w-16 h-11 rounded-lg hover:bg-sky-400"
        >
          Log in
        </button>
      </form>
      <p class="text-orange-600 text-sm">
        Demo account: username: Sugar & password: 999
      </p>
      <p id="warning" class="text-red-600 absolute left-10"></p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RegisterPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["updatedRegistered"]),
    handleSubmit(event) {
      event.preventDefault();
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      if (username === "Sugar" && password === "999") {
        this.updatedRegistered(true);
        document.getElementById("warning").innerText =
          "Registeration Successful";
        this.$router.push("/cart");
      } else {
        return (document.getElementById("warning").innerText =
          "Invalid username or password. Please, try again.");
      }
    },
  },
};
</script>
<style scoped>
#registerPage {
  height: 65vh;
}
</style>
