<template>
    <div class="order">
        <OrderHeader></OrderHeader>
        <router-view></router-view>
        <ServiceBar></ServiceBar>
        <Footer></Footer>
            
    </div>    
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/serviceBar'
import Footer from './../components/Footer'
export default {
    name:'order',
    components:{
        OrderHeader,
        ServiceBar,
        Footer
    }
}
</script>
<style lang="sass">

</style>