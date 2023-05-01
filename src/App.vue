<script setup lang="ts"></script>

<template>
  <div class="app">
    <header class="header">Header</header>

    <main class="main">
      <nav>Navigation with components</nav>

      <section class="main">Pages will be here</section>
    </main>

    <footer class="footer">Footer</footer>
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

.header {
  background-color: tomato;
}

.footer {
  background-color: red;
}
</style>
