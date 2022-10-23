<template>
  <Header />
  <router-view/>
</template>

<script>

import Header from "@/components/Header";
import MainPage from "@/pages/MainPage";
export default {
  components: {MainPage, Header}
}

</script>

<style lang="scss">

@import './assets/styles/normalize.css';
@import './assets/styles/flex-box.css';
@import './assets/styles/global.css';
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap');

body {
  overflow-y: scroll;
}

#app {
  display: flex;
  font-family: Inter, sans-serif;
  color: #3A4374;
  background: #f7f8fd;
}

</style>