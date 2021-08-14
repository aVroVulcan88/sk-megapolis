<template>
  <the-header />
  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
</script>
