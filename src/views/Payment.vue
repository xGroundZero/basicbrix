<template>
  <div>
    <div class="hero-bg">
      <div class="home">
        <div class="navbar pa-5 text-center d-flex justify-center align-center">
          <h2 class="pointer primary--text" @click="homeHandler">
            BasicBrix - Payment
          </h2>
        </div>

        <div class="product-container">
          <app-payment></app-payment>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Payment from "@/components/Payment/Payment";
import Footer from "@/components/Home/Footer";

export default {
  name: "Payment",
  data() {
    return {};
  },
  methods: {
    homeHandler() {
      this.$router.push("/");
    },
  },
  components: {
    appPayment: Payment,
    appFooter: Footer,
  },
};
</script>
