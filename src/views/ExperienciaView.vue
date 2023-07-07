<script setup>
import { ref, onMounted } from "vue";
import CardExp from "../components/UI/CardExp.vue";
import {dbexp} from '../data/experiencia'

const experiencias=ref([])
onMounted(()=>{
    experiencias.value=dbexp
})
</script>

<template>
    <div class="p-5 m-2 h-screen mt-20 sm:mt-0">
        <h1 class="text-2xl font-bold uppercase text-white">Experiencia Laboral</h1>
        <div v-for="exp in experiencias" :key="exp.id">
            <CardExp :experiencia="exp"/>
        </div>
    </div>
</template>


