<script setup>
import { reactive } from "vue";
import Asidelink from '../UI/Asidelink.vue';

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

</script>

<template>
    <div class="bg-sky-900 fixed top-0 left-0 z-40 w-64 h-full grid content-center transition-transform -translate-x-full sm:translate-x-0">
        <div class="p-5">
            <div class="p-2 flex flex-col justify-center">
                <div class="w-full flex justify-center">
                    <img class=" bg-purple-200 rounded-full w-36 h-36 bg-contain" src="/public/img/foto2022.jpg" alt="carga de imagen">
                </div>
                <p class="text-white text-center mt-2 font-bold uppercase">Programador</p>
            </div>
            <nav class="p-2">
                <ul class="p-2 mt-2">
                    <Asidelink :milink="link1" />
                    <Asidelink :milink="link2" />
                    <Asidelink :milink="link3" />
                    <Asidelink :milink="link4" />

                </ul>
            </nav>
        </div>
    </div>
</template>


