<script setup>
defineProps({
    experiencia:{
        type: Object,
        required: true
    }
})
</script>

<template>
        <div class="bg-white p-4 mt-5 rounded">
            <h2 class="text-xl font-bold uppercase">{{ experiencia.puesto }}</h2>
            <h3 class="font-bold uppercase text-slate-500">{{ experiencia.empresa }}</h3>
            <p class="mt-2">{{ experiencia.detalle }}</p>
            <p class="text-slate-400 font-bold mt-2">{{ experiencia.fecha }}</p>
        </div>
</template>


