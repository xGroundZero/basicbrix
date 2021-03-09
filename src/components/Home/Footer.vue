<template>
  <section class="footer-wrapper d-flex justify-space-between">
    <div>
      <h3 class="primary--text">BasicBrix</h3>
      <p>Some of the most Innovative Apps and Teams deploy with BasicBrix</p>
      <div class="d-flex social-media">
        <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-instagram</v-icon>
        <v-icon>mdi-youtube</v-icon>
        <v-icon>mdi-linkedin</v-icon>
      </div>
      <div class="address-container d-flex mt-3">
        <v-icon color="primary">mdi-map-marker</v-icon>
        <h4>350 Bay Meadows St. Reynoldsburg, OH 43068</h4>
      </div>
    </div>
    <div class="useful-container">
      <h3>Useful Links</h3>
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Shop by Categorie</p>
      <p>From the Blog</p>
      <p>FAQs</p>
    </div>

    <div class="customer-care-container">
      <h3>Customer Care</h3>
      <p>My Account</p>
      <p>Payment and Delivery</p>
      <p>FAQ</p>
      <p>Customer Support</p>
      <p>Our Partners</p>
    </div>

    <div class="product-categories-container">
      <h3>Product Categories</h3>
      <ul>
        <li>Fruits and Vegtables</li>
        <li>Herbs and Spices</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@mixin footer-hover {
  p {
    margin-bottom: 0px;
    cursor: pointer;

    &:hover {
      opacity: 1;
      transition: 0.2s all ease-in-out;
      color: #7eb23d;
    }
  }
}

.footer-wrapper {
  padding: 30px;
  background-color: #fff;
  width: 80%;
  margin: auto;

  .social-media {
    .v-icon.v-icon {
      margin-right: 16px;
      cursor: pointer;
    }
  }

  .useful-container,
  .customer-care-container {
    @include footer-hover;
  }

  .product-categories-container {
    ul {
      list-style: none;
    }

    ul li::before {
      content: "\2022";
      color: #7eb23d;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
}
</style>
