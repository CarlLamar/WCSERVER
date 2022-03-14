const app = Vue.createApp ({
    //Create Functions, data
    data(){
        return{
            title: 'The ledger',
            author: 'Carl Gegante',
            age: 20
        }
    }
});
app.mount('#app')