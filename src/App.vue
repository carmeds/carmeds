<script setup>
import { RouterView } from 'vue-router';
import Aside from './components/layouts/Aside.vue';
import Asidesm from './components/layouts/Asidesm.vue'
</script>

<template>
  <Aside></Aside>
    <Asidesm />
    <div class="bg-gray-700 h-screen flex flex-col justify-center content-center sm:ml-64">
      <RouterView />
    </div>
</template>

