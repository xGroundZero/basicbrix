<template>
  <div class="ma-3">
    <v-card max-width="275" class="mx-auto">
      <v-img :src="product.url" height="200px" dark> </v-img>

      <v-list two-line>
        <v-list-item-content class="pa-0">
          <div class="display-1 text-center">
            {{ product.name }}
          </div>
        </v-list-item-content>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Price: {{ product.price | dollarSign }}</v-list-item-title
            >
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-title
              >Quantity: {{ product.quantity }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <div v-if="isAddToCart">
              <v-text-field
                solo
                v-model="quantity"
                dense
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              ></v-text-field>
              <div class="d-flex justify-space-between">
                <v-btn color="primary" dark @click="addHandler(product)">
                  Add
                </v-btn>
                <v-btn color="error" dark @click="cancelHandler">
                  Cancel
                </v-btn>
              </div>
            </div>
            <v-btn
              rounded
              v-else
              color="primary"
              dark
              @click="addToCartHandler"
            >
              Add to Cart
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAddToCart: false,
      quantity: 1,
    };
  },
  props: ["product"],
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  methods: {
    addToCartHandler() {
      this.isAddToCart = true;
    },
    cancelHandler() {
      this.isAddToCart = false;
    },
    addHandler(item) {
      const quantity = parseInt(this.quantity);

      if (quantity !== 0 && quantity <= item.quantity) {
        
      const value = {
          id: item.id,
          name: item.name,
          price: item.price,
          subtotal: item.price * this.quantity,
          quantity: parseInt(this.quantity),
          url: item.url,
        };
        
        this.$store.dispatch("setItems", value);
        this.quantity = 1;
        this.isAddToCart = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  max-width: 124px;
  margin: 12px;
  transition: 0.15s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    padding: 12px;
    color: #03a9f4;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 100px;
    }
    small {
      font-size: 10px;
      padding: 4px;
    }
  }
}
</style>
