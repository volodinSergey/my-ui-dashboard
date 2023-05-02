<script setup lang="ts">
import Header from './widgets/Header.widget.vue'
import Footer from './widgets/Footer.widget.vue'
</script>

<template>
  <div class="app">
    <Header />

    <main class="main">
      <nav>Navigation with components</nav>

      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped lang="scss">
.app {
  display: grid;
  min-height: 100vh;
  grid-template-rows: minmax(2.5rem, auto) 1fr minmax(2.5rem, auto);
}

.main {
  display: grid;
  grid-template-columns: minmax(150px, 20%) 1fr;
}
</style>
