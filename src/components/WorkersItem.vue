<template>
  <li class="workers__item item relative row between align-center pl-10 group">
    <div class="workers__titles row align-center flex-1">
      <div class="col-md-5 pl-0 group-hover:text-[#1b59f8] duration-300 cursor-pointer" @click="$router.push(`/workers/${item.id}`)">
        <h3 class="item__name font-semibold text-sm">{{ item.name }}</h3>
        <span class="item__position text-sm uppercase opacity-70">{{ item.position }}</span>
      </div>
      <span class="item__date col-md-4 text-sm pl-0 text-[#70768C]">{{ item.gender }}</span>
      <span class="item__gender text-sm text-[#70768C]">{{ item.dateOfBrith }}</span>
    </div>
    <div class="item__btns row gap-1.5">
      <button @click="$router.push(`/edit-worker/${item.id}`)" class="btn btn-edit relative w-[40px] h-[40px] rounded-[10px] text-[#fff] bg-[#AD1FEA] hover:opacity-70 duration-200"><i class="fal fa-pen center-absolute"/></button>
      <button @click="removeWorker(item)" class="btn btn-del relative w-[40px] h-[40px] rounded-[10px] text-[#fff] bg-[#D73737] hover:opacity-70 duration-200"><i class="fal fa-trash-alt center-absolute"/></button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    },
    removeWorker: {

    }
  }
}
</script>

<style lang="scss" scoped>

.workers {

  .item:hover.item::before {
    border-color: #5684fd;
  }
  .item::before {
    position: absolute;
    top: 30%;
    left: 0;
    width: 20px;
    height: 20px;
    display: block;
    content: '';
    border-radius: 50%;
    border: 2px solid #888;
    transition: border-color 0.3s ease;
  }
  .item:not(:last-child)::after {
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 1px;
    display: flex;
    justify-content: center;
    content: '';
    background: #eee;
  }
}


</style>