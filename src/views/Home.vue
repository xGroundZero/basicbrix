<template>
  <div>
    <div class="hero-bg">
      <div class="home">
        <app-header></app-header>

        <div class="product-container">
          <app-products></app-products>
        </div>
      </div>
    </div>
    <app-best-seller></app-best-seller>

    <app-home-delivery></app-home-delivery>

    <app-sign-up></app-sign-up>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
import BestSeller from "@/components/Home/BestSeller";
import HomeDelivery from "@/components/Home/HomeDelivery";
import SignUp from "@/components/Home/SignUp";
import Footer from "@/components/Home/Footer";

export default {
  name: "Home",

  methods: {
    homeHandler() {
      this.$router.push("/");
    },
  },
  components: {
    appHeader: Header,
    appProducts: Products,
    appBestSeller: BestSeller,
    appHomeDelivery: HomeDelivery,
    appSignUp: SignUp,
    appFooter: Footer,
  },
};
</script>

<style lang="scss" scoped>

</style>
