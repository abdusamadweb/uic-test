<template>
  <div class="main py-8 flex-1">
    <div class="container">
      <div class="main__inner">
        <h2 class="font-bold text-2xl pb-7 mb-7 border-b border-b-slate-300">Dashboard</h2>
        <div class="py-5 px-6 rounded-[20px] bg-[#fff]">
          <ul class="row gap-8">
            <li class="row align-center w-[280px] rounded-[20px] p-3 border-2 border-[#F49F85] hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] hover:shadow-[#F49F8590] duration-300">
              <div class="relative w-[60px] h-[60px] mr-3 rounded-[12px] bg-[#F49F85]"><i class="fas fa-users center-absolute text-[26px] text-[#fff]"/></div>
              <p class="text-sm">
                Total <br>
                <span class="text-[24px] font-bold mt-1 mr-1">{{ getAllWorkers() }}</span> employers
              </p>
            </li>
            <li class="row align-center w-[280px] rounded-[20px] p-3 border-2 border-[#62BCFA] hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] hover:shadow-[#62BCFA80] duration-300">
              <div class="relative w-[60px] h-[60px] mr-3 rounded-[12px] bg-[#62BCFA]"><i class="fas fa-male center-absolute text-[30px] text-[#fff]"/></div>
              <p class="text-sm">
                Total <br>
                <span class="text-[24px] font-bold mt-1 mr-1">{{ getManWorkers() }}</span><span class="font-semibold">men</span> employers
              </p>
            </li>
            <li class="row align-center w-[280px] rounded-[20px] p-3 border-2 border-[#AD1FEA] hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] hover:shadow-[#AD1FEA75] duration-300">
              <div class="relative w-[60px] h-[60px] mr-3 rounded-[12px] bg-[#AD1FEA]"><i class="fas fa-female center-absolute text-[30px] text-[#fff]"/></div>
              <p class="text-sm">
                Total <br>
                <span class="text-[24px] font-bold mt-1 mr-1">{{ getWomanWorkers() }}</span><span class="font-semibold">women</span> employers
              </p>
            </li>
            <li class="row align-center w-[280px] rounded-[20px] p-3 border-2 border-[#4661E6] hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] hover:shadow-[#4661E690] duration-300">
              <div class="relative w-[60px] h-[60px] mr-3 rounded-[12px] bg-[#4661E6]"><i class="far fa-code center-absolute text-[26px] text-[#fff]"/></div>
              <p class="text-sm">
                Total <br>
                <span class="text-[24px] font-bold mt-1 mr-1">{{ getItWorkers() }}</span><span class="font-semibold">IT</span> employers
              </p>
            </li>
            <li class="row align-center w-[280px] rounded-[20px] p-3 border-2 border-[#656EA3] hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] hover:shadow-[#656EA390] duration-300">
              <div class="relative w-[60px] h-[60px] mr-3 rounded-[12px] bg-[#656EA3]"><i class="fal fa-analytics center-absolute text-[26px] text-[#fff]"/></div>
              <p class="text-sm">
                Total <br>
                <span class="text-[24px] font-bold mt-1 mr-1">{{ getMarketingWorkers() }}</span><span class="font-semibold">marketing</span> employers
              </p>
            </li>
            <li class="row align-center w-[280px] rounded-[20px] p-3 border-2 border-[#D73737] hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] hover:shadow-[#D7373790] duration-300">
              <div class="relative w-[60px] h-[60px] mr-3 rounded-[12px] bg-[#D73737]"><i class="fas fa-file-invoice center-absolute text-[26px] text-[#fff]"/></div>
              <p class="text-sm">
                Total <br>
                <span class="text-[24px] font-bold mt-1 mr-1">{{ getAccountingWorkers() }}</span><span class="font-semibold">accounting</span> employers
              </p>
            </li>
            <li class="row align-center w-[280px] rounded-[20px] p-3 border-2 border-[#3A4374] hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] hover:shadow-[#3A437490] duration-300">
              <div class="relative w-[60px] h-[60px] mr-3 rounded-[12px] bg-[#3A4374]"><i class="far fa-percentage center-absolute text-[30px] text-[#fff]"/></div>
              <p class="text-sm">
                Avarage <br>
                <span class="text-[24px] font-bold mt-1 mr-1">22 ~ 24</span> age
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "@/store";

const store = useStore()

const getAllWorkers = (e) => {
  e = 0
  store.workersList.map(i => e++)
  return store.totalWorkers = e
}

const getManWorkers = (e) => {
  e = 0
  store.workersList.map(i => i.gender === 'male' && e++)
  return store.menWorkers = e
}
const getWomanWorkers = (e) => {
  e = 0
  store.workersList.map(i => i.gender === 'female' && e++)
  return store.menWorkers = e
}

const getItWorkers = (e) => {
  e = 0
  store.workersList.map(i => i.position === 'IT' && e++)
  return store.itWorkers = e
}
const getMarketingWorkers = (e) => {
  e = 0
  store.workersList.map(i => i.position === 'marketing' && e++)
  return store.marketingWorkers = e
}
const getAccountingWorkers = (e) => {
  e = 0
  store.workersList.map(i => i.position === 'accounting' && e++)
  return store.accountingWorkers = e
}


</script>

<style lang="scss" scoped>

.main {

}

</style>