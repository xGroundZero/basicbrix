<template>
  <div>
    <div class="payment-container">
        <app-payment-form></app-payment-form>
    </div>
  </div>
</template>

<script>
import PaymentForm from "./PaymentForm";

export default {
  name: "Payment",
  components: {
    appPaymentForm: PaymentForm,
  },
};
</script>

<style lang="scss" scoped>
.payment-container {
  padding: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
