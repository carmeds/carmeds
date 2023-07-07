<script setup>
import { RouterLink } from "vue-router";  
defineProps({
    milink:{
        type:Object,
        required:true,
    }
})      
const clickenlink=()=>{
    let mimenubar=document.getElementById("mimenubar")
    if(mimenubar.classList.contains("hidden")){
        mimenubar.classList.remove("hidden")
    }else{
        mimenubar.classList.add("hidden")
    }
}

</script>

<template>
    <li class="bg-gray-800 hover:bg-sky-600 transition duration-700 ease-in p-2 flex w-full justify-between 
        text-white font-bold uppercase cursor-pointer items-center " @click="clickenlink">
       <RouterLink :active-class="'text-blue-300'" :to="{name: `${milink.name}`}">{{ milink.texto }}</RouterLink>
    </li>
</template>


