<script setup>
defineProps({
    estudios:{
        type: Object,
        required:true,
    }
})
</script>

<template>
        <div class="bg-white p-4 mt-5 rounded">
            <h2 class="text-xl font-bold uppercase">{{ estudios.profesion }}</h2>
            <h3 class="font-bold uppercase text-slate-500">{{ estudios.centro }}</h3>
            <p class="mt-2">{{ estudios.detalle }}</p>
            <p class="text-slate-400 font-bold mt-2">{{ estudios.fecha }}</p>
        </div>
</template>


