<script setup>
import { RouterLink } from "vue-router";  
defineProps({
    milink:{
        type:Object,
        required:true,
    }
})    


</script>
<template>
    <li class="bg-sky-900 hover:bg-sky-600 transition duration-300 rounded flex w-full justify-between text-white font-bold uppercase cursor-pointer items-center" >
       <RouterLink :active-class="'text-blue-300'" class="p-3 w-full" :to="{name: `${milink.name}`}">{{ milink.texto }}</RouterLink>
    </li>
</template>


