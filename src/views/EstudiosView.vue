<script setup>
  import { reactive } from "vue";
  import CardEst from "../components/UI/CardEst.vue";
  const estudios=reactive({
    profesion:'Matemáticas',
    centro:'UNI - Universidad Nacional de Ingenieria',
    detalle:'Bachiller',
    fecha:'Fecha de ingreso: 1997'
  }) 

  const estudios2=reactive({
    profesion:'Ingenieria Industrial',
    centro:'UTP - Universidad Tecnológica del Peru',
    detalle:'Pregrado',
    fecha:'Fecha de ingreso: 2016'
  }) 

  const estudios3=reactive({
    profesion:'Especialista en Excel 2013',
    centro:'Sistemas UNI',
    detalle:'Tecnico Excel Básico - Excel Avanzado - Desarróllo de Aplicaciones VBA - Macros',
    fecha:'Fecha de ingreso: 2013'
  }) 

  const estudios4=reactive({
    profesion:'PHP Developer 2013',
    centro:'Sistemas UNI',
    detalle:'Lenguaje PHP',
    fecha:'Fecha de ingreso: 2013'
  }) 

  const estudios5=reactive({
    profesion:'Experto en Hardware y Redes de Pcs 2010',
    centro:'Sistemas UNI',
    detalle:'Tecnico Ensamblaje - Cónfiguración de Dispositivos y Utilitarios - Mantenimiento y Reparación de PCS - Conectividad y Cableado Estructurado',
    fecha:'Fecha de ingreso: 2013'
  }) 

</script>
<template>
  <div class="p-5 m-2 h-full mt-20 sm:mt-2">
    <h1 class="text-2xl font-bold uppercase text-white">Estudios Realizados </h1>
    <CardEst :estudios="estudios" />
    <CardEst :estudios="estudios2" />
    <CardEst :estudios="estudios3" />
    <CardEst :estudios="estudios4" />
    <CardEst :estudios="estudios5" />

  </div>
</template>

