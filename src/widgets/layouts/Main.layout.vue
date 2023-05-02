<script setup lang="ts">
import Header from '../Header.widget.vue'
import Footer from '../Header.widget.vue'
</script>

<template>
  <div class="main-layout">
    <Header />

    <main class="main">
      <nav>Navigation for components</nav>

      <slot name="router-content" />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.main-layout {
  display: grid;
  min-height: 100vh;
  grid-template-rows: minmax(2.5rem, auto) 1fr minmax(2.5rem, auto);
}

.main {
  display: grid;
  grid-template-columns: minmax(150px, 20%) 1fr;
}
</style>
