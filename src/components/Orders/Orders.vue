<template>
  <div>
    <div class="order-container">
      <h3 v-if="items.length <= 0">No Orders...</h3>

      <div v-else>
        <app-order
          v-for="order in items"
          :order="order"
          :key="order.id"
        ></app-order>

        <div class="d-flex justify-space-between align-center mt-4">
          <h3>Total: {{ total | dollarSign }}</h3>
          <v-btn color="primary" dark @click="checkOutHandler">
            Check Out
          </v-btn>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Order from "./Order";
import { mapGetters } from "vuex";

export default {
  name: "Orders",
  computed: mapGetters(["items", "total"]),
  methods: {
    checkOutHandler() {
        this.$router.push("/payment");
    },
  },
  components: {
    appOrder: Order,
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  padding: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
