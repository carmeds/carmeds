<script setup>
defineProps({
    miskil:{
        type: Object,
        required:true
    }
})
</script>

<template>
        <div class="bg-gray-700 rounded-full p-5 m-3 w-12 h-12 sm:w-24 sm:h-24 flex justify-center items-center hover:bg-gray-500
        cursor-pointer">
            <font-awesome-icon class="text-white text-2xl sm:text-5xl font-bold" :icon="[ `${miskil.cod}` , `${miskil.nombre}`]" />
        </div>
</template>


