// 商城Vuex-mutations
export default{
    saveUserName(state,username){
        state.username=username;
    },
    saveCartCount(state,cartCount){
        state.cartCount=cartCount;
    },
    saveUserId(state,id){
        state.id=id
    }
}