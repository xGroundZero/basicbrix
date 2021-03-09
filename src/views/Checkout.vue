<template>
<div>
  <div class="hero-bg">
    <div class="home">
      <div class="navbar pa-5 text-center d-flex justify-center align-center">
        <h2 class="pointer primary--text" @click="homeHandler">BasicBrix - Checkout</h2>
      </div>

      <div class="product-container">
        <app-orders></app-orders>
      </div>
    </div>
  </div>
  <app-footer></app-footer>

  </div>
</template>

<script>
 import Orders from '@/components/Orders/Orders';
 import Footer from '@/components/Home/Footer';

export default {
  name: 'Home',
  data() {
    return {
    
    }
  },
  methods: {
    homeHandler() {
      this.$router.push("/");
    },
  },
  computed: {
    orders() {
      return this.$store.getters.items;
    },
  },
   components: {
     appOrders: Orders,
     appFooter: Footer,
   },
}
</script>


