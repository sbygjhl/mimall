<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javscript:;" class="icon-close" @click="$emit('cancel')"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureType}}</a>
                    <a href="javascript:;" class="btn" v-else-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
                    <a href="javascript:;" class="btn" v-else-if="btnType==3" @click="$emit('submit')">{{sureType}}</a>
                    <a href="javascript:;" class="btn" v-else-if="btnType==3" @click="$emit('cancel')">{{cancelText}}</a>
                    <div class="btn-grounp" v-else>
                        <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureType}}</a>
                        <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    
</template>
<script>
export default {
    name:"modal",
    props:{
        //小small，中middle，大large，表单form
        modalType:{
            type:String,
            default:'from'
        },
        title:String,
        //1：按钮类型，2：取消按钮 3：确定取消
        btnType:String,
        sureType:{
            type:String,
            default:"确定"
        },
        cancelText:{
            type:String,
            default:"取消"
        },
        showModal:Boolean
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
@import './../assets/scss/button.scss';
</style>
