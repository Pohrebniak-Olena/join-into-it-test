<template>
  <div class="search">
    <Icon name="search" class="search-icon" />
    <input type="text" placeholder="Search" />
  </div>
</template>

<style lang="scss" scoped>
.search {
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  input {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 13px;
    color: #4D4F5C;
    font-weight: 400;
    line-height: 100%;
  }

  .search-icon {
    width: 16px;
    height: 16px;
    color: #BCBCCB;
  }
}
</style>
