<template>
    <div class="order">
        <OrderHeader :title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </OrderHeader>
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
    data(){
        return{
            title:'',
            tip:''
        }
    },
    components:{
        OrderHeader,
        ServiceBar,
        Footer
    },
    mounted(){
        let path=this.$route.path;
        if(path=='/order/confirm'){
            this.title='订单确认';
            this.tip='请认真填写收货地址'
        }else if(path=='/order/list'){
            this.title='订单列表';
            this.tip='请谨防钓鱼连接或钓鱼电话，了解更多>'
        }else if(path=='/order/pay'){
            this.title='订单支付';
            this.tip='请谨防钓鱼连接或钓鱼电话，了解更多》'

        }
    }
}
</script>
<style lang="sass">

</style>