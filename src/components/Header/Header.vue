<template>
  <div class="navbar pa-5 text-center d-flex justify-center align-center">
    <h2 class="pointer primary--text" @click="homeHandler">BasicBrix</h2>

    <div class="ml-4 mt-5" style="width: 20%">
      <v-text-field
        placeholder="Search for product..."
        filled
        rounded
        v-model="searchProducts"
        dense
        append-icon="mdi-magnify"
      ></v-text-field>
    </div>

    <v-badge
      :content="ordersNumber"
      :value="ordersNumber"
      color="green"
      overlap
    >
      <v-icon class="ml-4 pointer" @click="checkoutHandler">mdi-cart</v-icon>
    </v-badge>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ml-3" color="primary" dark v-bind="attrs" v-on="on">
          Sort By
        </v-btn>
      </template>
      <v-list>
        <v-list-item class="pointer" @click="sortToLowestHandler">
          <v-list-item-title>Lowest to Highest</v-list-item-title>
        </v-list-item>
        <v-list-item class="pointer" @click="sortToHighestHandler">
          <v-list-item-title>Highest to Lowest</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    checkoutHandler() {
      this.$router.push("/checkout");
    },
    homeHandler() {
      this.$router.push("/");
    },
    sortToHighestHandler() {
      this.productList.sort(function(a, b) {
        return b.price - a.price;
      });
    },
    sortToLowestHandler() {
      this.productList.sort(function(a, b) {
        return a.price - b.price;
      });
    },
  },
  computed: {
    searchProducts: {
      get() {
        return this.search;
      },
      set(value) {
        return this.$store.dispatch("setSearch", value);
      },
    },
    ordersNumber() {
      return this.$store.getters.items.length;
    },
    productList() {
      return this.$store.getters.products;
    },
  },
};
</script>
