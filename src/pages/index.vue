<template>
  <div class="main">

  </div>
</template>

<script>
import api from "../diy/api"
export default {
  name:"index",
  data(){
    return {
      msg:"这是首页",
      bottomNav: 'movies'
    }
  },
  methods:{
    getData(){
      this.$http.get(api.getSong(34770182)).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });
    },
    handleChange (val) {
     this.bottomNav = val
    }
  }
}
</script>

<style lang="less" scoped>
  .main{
    background: #eee;
    >p{
      margin-top:1.2rem;
      text-align: center;
      color:red;
    }
  }
</style>
