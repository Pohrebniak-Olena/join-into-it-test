<script setup>
    import Search from './Search.vue'
    import ActionsBar from './ActionsBar.vue'
</script>

<template>
  <div class="header">
    <Search />
    <ActionsBar />
  </div>
</template>

<style lang="scss" scoped>
.header{
  width: 100%;
  min-height: 70px;
  display: inline-flex;
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px #0000000A;
}
</style>
