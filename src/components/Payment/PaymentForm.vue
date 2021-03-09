<template>
  <div class="d-flex">
    <form>
      <label for="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        pattern="[a-zA-Z]+"
        placeholder="Peter Jose"
        required
      />
      <br />
      <label for="address">Address: </label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="address st. brgy"
        required
      />
      <br />
      <label for="mobile">Mobile Number: </label>
      <input
        type="text"
        id="mobile"
        placeholder="+639123456789"
        pattern="^(09|\+639)\d{9}$"
        required
      />
      <br />
      <label for="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="johndoe@gmail.com"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
      <input type="submit" />
    </form>
    <h1>Total: {{ total | dollarSign }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.getters.total;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  p {
    margin: 20px;
  }
  input {
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-left: 20px;
    padding: 4px;
    margin-bottom: 20px;
    font-family: "Lato";
    width: 300px;
  }

  label {
    width: 250px;
    display: inline-block;
  }
}
</style>
