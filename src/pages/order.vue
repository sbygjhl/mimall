<template>
    <div class="order">
        <router-view></router-view>
        <ServiceBar></ServiceBar>
        <Footer></Footer>
            
    </div>    
</template>
<script>
import ServiceBar from './../components/serviceBar'
import Footer from './../components/Footer'
export default {
    name:'order',
    data(){
        return{
            title:'',
            tip:''
        }
    },
    components:{
        ServiceBar,
        Footer
    },
    mounted(){
        
    }
}
</script>
<style lang="sass">

</style>