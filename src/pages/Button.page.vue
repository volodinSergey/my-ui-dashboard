<script setup lang="ts"></script>

<template>
  <section class="button-page">
    <h1 class="button-page__main-title">Button</h1>

    <p>
      For more information , visit
      <a href="https://clck.ru/34KPTJ">button source code page</a>
    </p>

    <h2>Default button</h2>
    <UButton>Default</UButton>

    <h2>With reset styles</h2>
    <UButton reset>Reset</UButton>

    <h2>Disabled</h2>
    <UButton disabled> Disabled </UButton>

    <h2>With slots</h2>

    <UButton>
      <template #before> </template>
      Before content
    </UButton>
  </section>
</template>

<style scoped lang="scss">
.button-page {
  padding: 1rem;
  color: #fff;
  background-color: #042444;
}

.button-page__main-title {
  font-size: clamp(1.875rem, 3vw, 3.125rem);
}
</style>
