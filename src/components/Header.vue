<template>
  <div class="header sticky flex-none w-[246px] h-[100vh] py-[30px] px-[26px] bg-[#fff]">
    <div class="header__inner">
      <router-link to="/"><h1 class="header__logo font text-4xl mb-8">HR-M</h1></router-link>
      <nav class="header__nav">
        <ul class="header__list row flex-col gap-1">
          <li class="header__item">
            <router-link class="font-semibold" to="/">Dashboard</router-link>
          </li>
          <li class="header__item">
            <router-link class="font-semibold" to="/workers">Employers</router-link>
          </li>
          <li class="header__item">
            <router-link class="font-semibold" to="/add-worker">Add employer</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.header {
  top: 0;
  left: 0;
  border-radius: 0 20px 20px 0;
  border: 1px solid #EFF0F6;

  &__logo {
    font-family: 'Anton', sans-serif;
  }

  &__item {
    a {
      display: block;
      font-size: 15px;
      padding: 10px 15px;
      border-radius: 10px;
      background: #fff;
      transition: background-color 0.3s ease;

      &:hover {
        background: #f7f9fd;
      }

      &.router-link-active {
        color: #1B59F8;
        background: #f2f4ff;
      }
    }
  }
}

</style>