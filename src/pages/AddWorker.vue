<template>
  <div class="add py-8 flex-1">
    <div class="container">
      <h2 class="font-bold text-2xl pb-7 mb-7 border-b border-b-slate-300">Add new employer</h2>
      <form class="py-5 px-6 rounded-[20px] bg-[#fff]" @submit.prevent>
        <label class="block mb-4">
          <span class="font-semibold text-[#3A4374] mb-2">Employer's name</span>
          <input v-model="name" class="block w-[300px] text-sm p-3 rounded-[10px] outline-none border border-[#eee] hover:border-[#1b59f8] focus:border-[#1b59f8] text-[#3A4374] bg-[#F7F8FD] duration-300" type="text" placeholder="Name" required>
        </label>
        <label class="block mb-4">
          <span class="font-semibold text-[#3A4374] mb-2">Employer's position</span>
          <select v-model="position" class="select block w-[300px] text-sm p-3 rounded-[10px] outline-none border border-[#eee] hover:border-[#1b59f8] focus:border-[#1b59f8] text-[#3A4374] bg-[#F7F8FD] duration-300">
            <option value="IT">IT</option>
            <option value="marketing">Marketing</option>
            <option value="accounting">Accounting</option>
          </select>
        </label>
        <label class="block mb-4">
          <span class="font-semibold text-[#3A4374] mb-2">Employer's day of birth</span>
          <input v-model="birth" class="block w-[300px] text-sm p-3 rounded-[10px] outline-none border border-[#eee] hover:border-[#1b59f8] focus:border-[#1b59f8] text-[#3A4374] bg-[#F7F8FD] duration-300" type="date" placeholder="Birth day ex: 22-02-2002" required>
        </label>
        <div class="mb-6">
          <label class="row">
            <span class="radio w-[100px] row between align-center font-semibold text-[#3A4374]">Male</span>
            <input v-model="gender" class="inp" type="radio" id="male" name="gender" value="male">
          </label>
          <label class="row">
            <span class="radio w-[100px] row between align-center font-semibold text-[#3A4374]">Female</span>
            <input v-model="gender" class="inp" type="radio" id="female" name="gender" value="female">
          </label>
        </div>
        <button @click="pushNewWorker" class="px-5 py-2 rounded-[10px] font-semibold text-sm text-[#fff] bg-[#AD1FEA] hover:opacity-70 duration-300">Confirm</button>
      </form>
    </div>
  </div>
</template>
<script setup>

import {ref} from "vue";
import {useStore} from "@/store";
import {useRouter} from 'vue-router'

const store = useStore()
const router = useRouter()

const newWorker = []

const id = ref(new Date())
const name = ref('')
const position = ref('IT')
const gender = ref('male')
const birth = ref('')


const pushNewWorker = () => {
  if (id.value !== '' && name.value !== '' && position.value !== '' && gender.value !== '' && birth.value !== '') {
    store.workersList.push({'id': id.value, 'name': name.value, 'position': position.value, 'gender': gender.value, 'dateOfBrith': birth.value})
    router.push('/workers')
  }
}


</script>

<style lang="scss" scoped>



</style>