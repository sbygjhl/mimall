<template>
    <div class="cart">
        
        <OrderHeader title="我得购物车">
            <template v-slot:tip>
                <span>
                    温馨提示：产品是否购买成功，以最终下单为准11
                </span>
            </template>
        </OrderHeader>
        <div class="container">
            cart
        </div>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader';
export default {
    name:'cart',
    components:{
        OrderHeader
    }
}
</script>
<style lang='scss'>

</style>