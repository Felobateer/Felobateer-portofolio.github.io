<template>
  <NavBar />
  <router-view />
  <FooterComponent />
</template>

<script>
import NavBar from "./components/navbar.vue";
import FooterComponent from "./components/footer.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
  },
  computed: {
    ...mapState(["registered"]),
  },
};
</script>

<style>
html {
  overflow-x: hidden;
}
</style>
