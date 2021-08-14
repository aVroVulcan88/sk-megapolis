<template>
  <header class="pt-40 px-20 absolute top-0 right-0">
    <router-link
      v-for="item in items"
      :key="item.text"
      active-class="text-gray outline-border"
      class="mr-2 p-2 hover:text-gray active:text-gray transition duration-500"
      :to="{ name: item.route }">
      {{ item.text }}
    </router-link>
  </header>
</template>

<script setup>

const items = [
  { text: 'Главная', route: 'home' },
  { text: 'О Нас', route: 'about' },
  { text: 'Наши услуги', route: 'services' },
  { text: 'Наши работы', route: 'portfolio' },
  { text: 'Контакты', route: 'contacts' },
];
</script>

<style scoped>

</style>
