<script setup>
import { RouterView } from 'vue-router'
import Aside from '@/components/aside/Aside.vue'
import Header from '@/components/header/Header.vue'
</script>

<template>
  <div class="wrapper">
    <Aside/>
    <div class="page-content">
      <Header/>
      <RouterView />
    </div>
  </div>

</template>

<style lang="scss">
.wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-grow: 1;
  min-height: 100vh;

  --aside-width: 260px;

  .page-content{
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    padding-left: var(--aside-width);
  }

  aside{
    width: var(--aside-width);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
  }

  .main-container{
    padding: 32px  75px;
    display: flex;
    flex-direction: column;
    main{
      max-width: 1170px;
    }
  }
}
</style>