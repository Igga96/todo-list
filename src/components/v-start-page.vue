<template>
  <div class="v-start-page">
    <router-link :to="{name:'list'}"><button class="v-start-page__button">GO TO APP</button></router-link>
  </div>
</template>
<script>
export default {
  name: 'vStartPage'
}
</script>
<style >
.v-start-page{
  display: flex;
  justify-content: center;
  align-items:center;
  margin: 0 auto;
  height: 100%;
}
.v-start-page__button{
  padding: 10px 25px;
  border-radius: 30px;
  border: none;
  background: rgba(115, 202, 103, 0.514);
  cursor: pointer;
  font-size: 24px;
}
</style>
