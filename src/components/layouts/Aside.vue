<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="bg-blue-600 fixed top-0 left-0 z-40 w-64 h-screen grid content-center transition-transform -translate-x-full sm:translate-x-0">
        <div class="bg-blue-200 p-5">
            <div class="bg-white p-2 flex flex-col justify-center">
                <img class=" bg-purple-200 rounded-full h-20" src="/public/img/vite.svg" alt="carga de imagen">
                <p class="text-center">Analista Programador</p>
            </div>
            <nav class="bg-green-500 p-2">
                <ul class="p-2">
                    <li>
                        <RouterLink :to="{name: 'principal'}">Acerca de</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{name: 'experiencia'}">Experiencia</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{name: 'estudios'}">Estudios</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{name: 'skills'}">Skills</RouterLink>
                    </li>

                </ul>
            </nav>
        </div>
    </div>
</template>


