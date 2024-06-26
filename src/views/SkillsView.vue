<script setup>
import { ref,onMounted } from "vue";
import ElementSkill from "../components/UI/ElementSkill.vue";
import {dbskill} from '../data/skills'

const skills=ref([])
onMounted(() => {
    skills.value=dbskill
})
</script>

<template>
    <div class="p-5 m-2 h-full mt-20 sm:mt-2">
        <h1 class="font-bold uppercase text-2xl text-white">Skills</h1>

        <div class="bg-white mt-3 p-3 rounded">
            <h2 class="font-bold uppercase text-xl text-gray-400">FrontEnd</h2>
            <div class="flex flex-wrap">
                <div v-for="sk in skills" :key="sk.id" class="fle justify-center">
                    <ElementSkill v-if="sk.tipo==1" :miskil="sk"/>
                </div>
            </div>
        </div>

        <div class="bg-white mt-3 p-3 rounded ">
            <h2 class="font-bold uppercase text-xl text-gray-400">BackEnd</h2>
            <div class="flex flex-wrap">
                <div v-for="sk in skills" :key="sk.id" >
                    <ElementSkill v-if="sk.tipo==2" :miskil="sk"/>
                </div>
            </div>
        </div>

        <div class="bg-white mt-3 p-3 rounded ">
            <h2 class="font-bold uppercase text-xl text-gray-400">Básicos</h2>
            <div class="flex flex-wrap">
                <div v-for="sk in skills" :key="sk.id" >
                    <ElementSkill v-if="sk.tipo==3" :miskil="sk"/>
                </div>
            </div>
        </div>

    </div>
</template>


