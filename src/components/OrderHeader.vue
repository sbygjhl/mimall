<template>
    <div class="order-header">
        <div class="container">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}</h2>
                <slot name='tip'></slot>
            </div>
            <div class="username">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'oreder-header',
    props:{
        title:String
    },
    computed:{
        ...mapState(['username'])
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
    .order-header{
        .container{
            @include flex();
            padding: 30px 0;
            .header-logo{
                background: #FF6600;
                width: 55px;
                a{
                    @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                }
            }
            .title{
                width: 800px;
                 height: 60px;
                h2{
                    display: inline-block;
                    height: 55px;
                    line-height: 55px;
                    font-size: 28px;
                }
                span{
                    display: inline-block;
                    font-size: 14px;
                    line-height: 55px;
                    margin-left: 18px;
                    color: #333333;
                }
                
                
            }
            .username{
                width: 80px;
                height: 55px;
                line-height: 55px;
                font-size: 14px;
            }
        }
        
        
    }
</style>