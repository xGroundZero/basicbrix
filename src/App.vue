<template>
  <v-app>
    <div id="app">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </v-app>
</template>

<script>


export default {
  name: "App"
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins/_all.scss";
</style>


