<script setup>
import { reactive } from "vue";
import ElementSocial from "../components/UI/ElementSocial.vue";

const misocial=reactive({
    cod:'fab',
    nombre: 'linkedin',
    ruta:'https://www.linkedin.com/in/cmedinasantamaria/'
})

const misocial1=reactive({
    cod:'fab',
    nombre: 'github',
    ruta:'https://github.com/carmeds'
})

const miportafolio=reactive({
    cod:'fas',
    nombre: 'briefcase',
    ruta:'https://www.tiendacarmeds.store'
})

</script>


<template>
  <div class="p-5 sm:p-5 m-2">
    <div class=" flex justify-center sm:hidden">
      <img class=" bg-purple-200 rounded-full w-36 h-36 bg-contain" src="/public/img/foto2022.jpg" alt="carga de imagen">
    </div>

    <h1 class="text-white font-bold uppercase text-3xl mt-5">Medina Santamaria Carlos Santiago</h1>
    <h2 class="text-gray-300 font-bold uppercase sm:hidden">Analista Programador</h2>

    <h2 class="text-white font-bold uppercase mt-3"> <span class="text-gray-300"> Mz A lote 9 Urb. El Dorado - Puente piedra </span>
      - <span> &nbsp;<font-awesome-icon :icon="['fab', 'whatsapp']" /> </span> 963018168
      - <span class="text-gray-300 ">carmeds@gmail.com</span> 
    </h2>
    <div class="bg-gray-300 mt-5 p-3 rounded hidden sm:flex">
      <p>Bachiller en Matemáticas. Me desempeño como Desarrollador Web Frontend y Backend. Cuento con más de 7 años 
        de experiencia en implementación y desarrollo de aplicaciones e implementación a producción.
      </p>
    </div>
    <div class="mt-4 rounded sm:flex">
      <a :href="miportafolio.ruta" targe="_blank" 
      class="text-white font-bold bg-blue-400 hover:bg-blue-800 p-2 rounded-md ">Ir a Portafolio Web</a>
    </div>
    <div class="mt-5 pl-0 py1 rounded flex flex-wrap justify-center sm:justify-start">
      <ElementSocial :misocial="misocial"/>
      <ElementSocial :misocial="misocial1"/>
      <!-- <ElementSocial :misocial="misocial2"/> -->

    </div>
  </div>
</template>
