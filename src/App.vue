<script setup>
import { RouterView } from 'vue-router';
import Aside from './components/layouts/Aside.vue';
import Asidesm from './components/layouts/Asidesm.vue'
</script>

<template>
  <Aside></Aside>
    <Asidesm />
    <div class="bg-gradient-to-b from-blue-500 to-blue-900 
    h-screen flex flex-col justify-center content-center sm:ml-64 xl:pr-64">
      <RouterView />
    </div>
</template>

