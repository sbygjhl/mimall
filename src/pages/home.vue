<template>
    <div class="home">
        <NavHeader></NavHeader>
        <router-view></router-view>
        <ServiceBar></ServiceBar>
        <Footer></Footer>

    </div>
</template>
<script>
import Footer from "./../components/Footer"
import NavHeader from "./../components/NavHeader"
import ServiceBar from "./../components/serviceBar"
export default {
    components:{
        Footer,
        NavHeader,
        ServiceBar
    }
}
</script>