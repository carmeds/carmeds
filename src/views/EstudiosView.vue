<script setup>
  import { reactive,onMounted } from "vue";
  import CardEst from "../components/UI/CardEst.vue";
  import {dbestudios} from '../data/estudios'

  const state=reactive({
    estudios:[]
  })
  onMounted(() => {
    state.estudios=dbestudios
  })
</script>

<template>
  <div class="p-5 m-2 h-full mt-20 sm:mt-2 overflow-auto">
    <h1 class="text-2xl font-bold uppercase text-white">Estudios Realizados </h1>
      <div class="" v-for="est in state.estudios" :key="est.id">
        <CardEst :estudios="est" />
      </div>
  </div>
</template>

