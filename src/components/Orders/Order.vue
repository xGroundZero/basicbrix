<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <div>
        <v-img :src="order.url" height="100px" width="100px" dark> </v-img>
        <h2>{{ order.name }}</h2>
      </div>
      <div>
        <p class="mb-0">
          Price: <strong> {{ order.price | dollarSign }}</strong>
        </p>
        <p class="mb-0">
          SubTotal: <strong> {{ order.subtotal | dollarSign }}</strong>
        </p>
        <p class="mb-0">Quantity: {{ order.quantity }}x</p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["order"],
};
</script>
