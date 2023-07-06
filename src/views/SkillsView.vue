<script setup>
import { reactive } from "vue";
import ElementSkill from "../components/UI/ElementSkill.vue";

const miskil=reactive({
    cod:'fab',
    nombre: 'html5',
})

const miskil2=reactive({
    cod:'fab',
    nombre: 'css3-alt',
})

const miskil3=reactive({
    cod:'fab',
    nombre: 'square-js',
})

const miskil4=reactive({
    cod:'fab',
    nombre: 'vuejs',
})

const miskil5=reactive({
    cod:'fab',
    nombre: 'bootstrap',
})

const backskil=reactive({
    cod:'fab',
    nombre: 'php',
})

const backskil1=reactive({
    cod:'fab',
    nombre: 'laravel',
})

const backskil2=reactive({
    cod:'fab',
    nombre: 'git-alt',
})

const backskil3=reactive({
    cod:'fab',
    nombre: 'free-code-camp',
})

const backskil4=reactive({
    cod:'fas',
    nombre: 'database',
})

</script>

<template>
    <div class="p-5 m-2 h-full mt-20 sm:mt-2">
        <h1 class="font-bold uppercase text-2xl text-white">Skills</h1>

        <div class="bg-white mt-3 p-3 rounded ">
            <h2 class="font-bold uppercase text-xl text-gray-400">FrontEnd</h2>
            <div class="flex flex-wrap">
                <ElementSkill :miskil="miskil4"/>
                <ElementSkill :miskil="miskil5"/>
            </div>

        </div>

        <div class="bg-white mt-3 p-3 rounded ">
            <h2 class="font-bold uppercase text-xl text-gray-400">BackEnd</h2>
            <div class="flex flex-wrap">
                <ElementSkill :miskil="backskil"/>
                <ElementSkill :miskil="backskil1"/>
                <ElementSkill :miskil="backskil3"/>

            </div>
        </div>

        <div class="bg-white mt-3 p-3 rounded ">
            <h2 class="font-bold uppercase text-xl text-gray-400">Básicos</h2>
            <div class="flex flex-wrap">
                <ElementSkill :miskil="miskil"/>
                <ElementSkill :miskil="miskil2"/>
                <ElementSkill :miskil="miskil3"/>
                <ElementSkill :miskil="backskil2"/>
                <ElementSkill :miskil="backskil4"/>

            </div>
        </div>

    </div>
</template>


