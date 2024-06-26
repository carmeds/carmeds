<script setup>
import { reactive } from "vue";
import Asidemilink from "../UI/Asidemilink.vue";
const link1=reactive({
    name: 'principal',
    texto: 'Acerca de'
})
const link2=reactive({
    name: 'experiencia',
    texto: 'Experiencia'
})

const link3=reactive({
    name: 'estudios',
    texto: 'Estudios'
})

const link4=reactive({
    name: 'skills',
    texto: 'Skills'
})

const menubar=()=>{
    let menu=document.getElementById("mimenubar")
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
        menu.classList.add("w-full")
    }else{
        menu.classList.add("hidden")
    }
}

</script>

<template>
  <div class="bg-gray-800 w-full sm:ml-64 sm:hidden absolute mt-0">
    <div @click="menubar" class="bg-gray-800 p-2 h-12 w-12 text-white uppercase font-bold flex justify-center
     items-center cursor-pointer">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>

    <ul id="mimenubar" class="hidden">
      <Asidemilink :milink="link1" />
      <Asidemilink :milink="link2" />
      <Asidemilink :milink="link3" />
      <Asidemilink :milink="link4" />
    </ul>

  </div>
</template>


