<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Aside from './components/layouts/Aside.vue';

</script>

<template>
  <Aside></Aside>
  <div class="bg-red-400 flex flex-col h-screen sm:ml-64">
    <RouterView />
  </div>
</template>

