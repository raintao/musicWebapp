<template>
  <div class="main">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name:"index",
  data(){
    return {
      msg:"这是首页"
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    background: #eee;
    >p{
      margin-top:1.2rem;
      text-align: center;
    }
  }
</style>
