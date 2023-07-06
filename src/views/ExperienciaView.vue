<script setup>
import { reactive } from "vue";
import CardExp from "../components/UI/CardExp.vue";

const experiencia=reactive({
    puesto:'Analista programador',
    empresa:'Poder Judicial',
    detalle:'Desarrollo y mantenimiento de aplicaciones del área: Módulo de atención al usuario - Conformación de magistrados - Producción jurisdiccional - Sistema de control estadístico.',
    fecha:'Mayo 2017 - Junio 2023'
}) 

const experiencia2=reactive({
    puesto:'Analista de operaciones',
    empresa:'Dynamicall',
    detalle:'Elaboración de reportes de gerencia. Desarrollo de kpi indicadores para las campañas. Análisis y proyección de gestión. Uso de excel avanzado, macros, tabla dinámicas y macros en access',
    fecha:'Mayo 2015 - Diciembre 2016'
}) 

const experiencia3=reactive({
    puesto:'Programador',
    empresa:'Soreto SAC',
    detalle:'Programación de Sistema de control de Ventas. Realizado en Visual Basic 6.0 y Mysql',
    fecha:'Octubre 2013 - Abril 2015'
}) 

const experiencia4=reactive({
    puesto:'Analista de Compras',
    empresa:'Sodexo',
    detalle:'Uso de tablas dinámicas y Macros en Excel – Manejo del Sistema SAP MM registro de compras',
    fecha:'Marzo 2010 - Enero 2012'
}) 

</script>

<template>
    <div class="p-5 m-2 h-screen mt-20 sm:mt-0">
        <h1 class="text-2xl font-bold uppercase text-white">Experiencia Laboral</h1>
        <CardExp :experiencia="experiencia"/>
        <CardExp :experiencia="experiencia2"/>
        <CardExp :experiencia="experiencia3"/>
        <CardExp :experiencia="experiencia4"/>
    </div>
</template>


