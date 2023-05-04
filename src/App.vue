<script setup lang="ts">
import MainLayout from '@widgets/layouts/Main.layout.vue'
</script>

<template>
  <MainLayout>
    <template #router-content>
      <router-view> </router-view>
    </template>
  </MainLayout>
</template>

<style scoped lang="scss"></style>
