<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  mounted(){
    if(this.$cookie.set('userId')){
      this.getUser();
      this.getCartCount();
    }
    // let username =this.$cookie.get('userName');
    // if(username){
    //   this.$store.dispatch('saveUserName',username)
    // }
    // console.log(username);
    
    
  },
  methods:{
    //跨域问题
    getUser(){
      this.axios.get('/user').then((res)=>{
        //to-do 保存到vuex里面
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        //to-do 保存到vuex里面
        this.$store.dispatch('saveCartCount',res);
      })
    }
    
  }
}
</script>

<style lang='scss'>
@import './assets/scss/reset.scss';
</style>
