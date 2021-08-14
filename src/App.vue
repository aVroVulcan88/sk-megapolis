<template>
  <router-link
    :to="{ name: 'home' }"
    class="text-red-700">
    HOME
  </router-link>
  <router-link :to="{ name: 'about' }">
    ABOUT
  </router-link>
  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup></script>
