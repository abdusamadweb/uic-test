<template>
  <div class="single py-8 flex-1">
    <div class="container">
      <h2 class="font-bold text-2xl pb-7 mb-7 border-b border-b-slate-300">Worker - {{ 1 }}</h2>
      <div class="row flex-col py-5 px-6 rounded-[20px] bg-[#fff]">
        <h3 class="font-semibold text-lg">{{ item.name }}</h3>
        <span class="text-lg text-[14px] text-[#1b59f8] mb-2 uppercase">{{ item.position }}</span>
        <span class="text-[15px] text=[#70768C] mb-2">Gender:<span class="font-semibold ml-3">{{ item.gender }}</span></span>
        <span class="text-[15px] text=[#70768C] mb-5">Date of birth:<span class="font-semibold ml-3">{{ item.dateOfBrith }}</span></span>
        <div class="item__btns row gap-1.5">
          <button class="btn btn-edit relative w-[40px] h-[40px] rounded-[10px] text-[#fff] bg-[#AD1FEA] hover:opacity-70 duration-200" @click="$router.push(`/edit-worker/${item.id}`)"><i class="fal fa-pen center-absolute"/></button>
          <button class="btn btn-del relative w-[40px] h-[40px] rounded-[10px] text-[#fff] bg-[#D73737] hover:opacity-70 duration-200" @click="$emit('remove', item)"><i class="fal fa-trash-alt center-absolute"/></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useStore} from "@/store";
import {useRoute} from 'vue-router'

const store = useStore()
const route = useRoute()

const workers = store.workersList
const item = workers.find(item => item.id == route.params.id)

</script>

<style scoped>

</style>