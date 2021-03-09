<template>
  <section class="best-seller-wrapper">
    <div class="best-seller-container">
      <h1>Best Sellers This Week</h1>

      <div class="best-seller-item d-flex justify-space-between">
        <div
          class="best-seller-item-cont"
          v-for="(item, i) in sellerItem"
          :key="i"
        >
          <v-icon x-large>{{ item.icon }}</v-icon>
          <div class="best-seller-text">
            <h3>{{ item.header }}</h3>
            <p>{{ item.body }}</p>
          </div>
        </div>
      </div>

      <div
        class="mt-5 d-flex justify-space-between"
        style="width: 70%; margin: auto;"
      >
        <v-carousel
          cycle
          height="300"
          style="border-radius: 20px;"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <v-img
          class="ml-7"
          style="border-radius: 20px;"
          src="https://nutritiontwins.com/wp-content/uploads/2014/04/Berry_Banana_Smoothie.jpg"
          height="300px"
          width="200px"
          dark
        >
        </v-img>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://image.freepik.com/free-vector/hello-summer-tropic-fruits-banner_1268-11173.jpg",
        },
        {
          src:
            "https://image.freepik.com/free-psd/fruits-berries-collection-banner_88281-3083.jpg",
        },
        {
          src:
            "https://cdn5.vectorstock.com/i/1000x1000/50/59/fruits-banner-natural-food-greengrocery-concept-vector-20835059.jpg",
        },
        {
          src:
            "https://st3.depositphotos.com/1020070/17671/v/1600/depositphotos_176713554-stock-illustration-fruit-and-berry-banner-with.jpg",
        },
      ],
      sellerItem: [
        {
          header: "Fast Delivery",
          body: "Within 2-3 hours after ordering",
          icon: "mdi-truck-delivery",
        },
        {
          header: "Opening Hours",
          body: "Mon.- Fri.: 9:00 am - 9:00 pm",
          icon: "mdi-clock",
        },
        {
          header: "Eco-Friendly Packaging",
          body: "Sustainable Materials",
          icon: "mdi-sprout",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.best-seller-wrapper {
  background-color: #f4f5f5;
  height: auto;
  padding: 20px;

  .best-seller-container {
    width: 80%;
    margin: auto;
    text-align: center;
  }
  .best-seller-item-cont {
    margin: 10px;
    padding: 10px;
    background: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
  }
  .best-seller-item {
    width: 70%;
    margin: auto;
  }
  .best-seller-text {
    width: 80%;
    text-align: initial;
  }
}
</style>
