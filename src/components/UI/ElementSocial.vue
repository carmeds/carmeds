<script setup>
defineProps({
    misocial:{
        type: Object,
        required:true
    }
})

</script>

<template>
        <div class="bg-blue-800 rounded-full p-5 m-2 w-12 h-12 flex justify-center items-center hover:bg-blue-500
        cursor-pointer transition duration-700 ease-in-out">
            <a :href="`${misocial.ruta }`" target="_blank">
                <font-awesome-icon class="text-white text-2xl font-bold" :icon="[ `${misocial.cod}` , `${misocial.nombre}`]" />
            </a>
        </div>
</template>


