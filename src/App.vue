<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view style="min-height: 100vh"></router-view>
    <router-view name="panel"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  async beforeUpdate() {
    try {
      document.getElementById("navbar").setAttribute("class", `navbar-menu`);
    } catch (e) {
      //nulla
    }
  },
};
</script>