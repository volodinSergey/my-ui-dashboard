<script setup lang="ts">
import Header from '@widgets/Header.widget.vue'
import Footer from '@widgets/Footer.widget.vue'
</script>

<template>
  <div class="main-layout">
    <Header />

    <main class="main">
      <nav class="main__nav nav">Navigation for components</nav>

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

.nav {
  background-color: #021d38;
  border-right: 3px solid #2c639b;
}
</style>
