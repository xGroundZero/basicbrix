<template>
  <section class="signup-wrapper">
    <div class="mr-9">
      <h1>Save 20% on first shopping</h1>
      <p>Sign up to Newsletter</p>
    </div>
    <div class="d-flex signup-container">
      <v-text-field
        label="Email"
        solo
        rounded
        outlined
        dense
        flat
      ></v-text-field>
      <v-btn rounded color="primary" dark flat dense>
        <v-icon left>
          mdi-email
        </v-icon>
        Subscribe
      </v-btn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.signup-wrapper {
  padding: 20px;
  background: #f4f5f5;
  display: flex;
  justify-content: center;
  align-content: center;
  .v-text-field--rounded {
    border-radius: 28px 0px 0px 28px;
  }
  .v-btn--rounded {
    border-radius: 0px 28px 28px 0px;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    height: 40px;
  }
  .v-btn--is-elevated {
    box-shadow: none;
  }
}
</style>
