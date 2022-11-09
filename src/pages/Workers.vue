<template>
  <div class="workers flex-1 py-8">
    <div class="container">
      <div class="workers__inner">
        <div class="row between align-center pb-5 mb-7 border-b border-b-slate-300">
          <h2 class="workers__title font-bold text-2xl">Employers</h2>
          <router-link class="workers__link row align-center gap-2 px-3.5 py-1 rounded-[10px] text-sm text-[#fff] bg-[#1B59F8] hover:bg-[#fff] hover:text-[#1b59f8] duration-300" to="/add-worker">
            <i class="fal fa-plus text-lg"/>
            <span>Add employer</span>
          </router-link>
        </div>
        <div class="p-5 rounded-[20px] bg-[#fff]">
          <div class="row align-center mb-4">
            <form class="workers__form col-md-5 pl-0">
              <label class="relative">
                <i class="fal fa-search center-absolute left-6 text-[#808080] "/>
                <input v-model="keyword" class="workers__inp w-[300px] text-sm p-2.5 pl-11 rounded-[12px] border border-[#eee] hover:border-[#1b59f8] focus:border-[#1b59f8] outline-none duration-300" type="search" placeholder="Search employer . . .">
              </label>
            </form>
            <div class="col-md-3 text-sm relative right-8">
              <span class="px-4 py-1 rounded-[10px] text-[#4F5E74] bg-[#EFF0F6]">Gender:</span>
            </div>
            <div class="col-md-3 text-sm pl-16 relative right-10">
              <span class="px-4 py-1 rounded-[10px] text-[#4F5E74] bg-[#EFF0F6]">Date:</span>
            </div>
          </div>
          <ul class="workers__list row flex-col gap-4" v-if="filterWorkers.length > 0">
            <transition-group name="worker-list">
              <WorkersItem v-for="item in filterWorkers" :item="item" :key="item.id" :removeWorker="removeWorker"/>
            </transition-group>
          </ul>
          <h3 class="text-sm text-[#70768C] ml-1" v-else>No workers yet . . .</h3>
        </div>
      </div>
    </div>
  </div>




</template>

<script setup>
import WorkersItem from "@/components/WorkersItem";
import {computed, ref} from "vue";
import { useStore } from "@/store";

const store = useStore()
const keyword = ref("")
const filterWorkers = computed(() => store.workersList.filter(({name}) => name.toLowerCase().includes(keyword.value)))
const removeWorker = (e) => {
  store.workersList = store.workersList.filter(worker => worker.id !== e.id)
}
</script>

<style lang="scss" scoped>

.workers {

  .worker-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .worker-list-enter-active,
  .worker-list-leave-active {
    transition: all 0.6s ease;
  }
  .worker-list-enter-from,
  .worker-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }

  &__link {
    border: 1px solid transparent;

    &:hover {
      border-color: #1B59F8;
    }
  }
}

</style>