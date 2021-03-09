<template>
  <div>
    <div class="d-flex">
      <app-product
        v-for="product in visiblePages"
        :product="product"
        :key="product.id"
      ></app-product>
    </div>

    <v-pagination
      v-model="page"
      :length="Math.ceil(filteredList.length / perPage)"
    ></v-pagination>
  </div>
</template>

<script>
import Product from "./Product";
import { mapGetters } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      page: 1,
      perPage: 3,
    };
  },
  components: {
    appProduct: Product,
  },
  computed: {
    ...mapGetters(["search", "products"]),
    filteredList() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.search.toLowerCase());
      });
      
    },
    visiblePages() {
       const list = this.filteredList.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
      return list;
    },
  },
};
</script>

<style scoped></style>
