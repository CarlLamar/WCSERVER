const books = Vue.createApp({
    
    data(){
        return{
            showBooks: true,
            btitle: 'The ledger',
            bauthor: 'Carl Gegante',
            year: 2001
        }
    },
    methods :{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
}
);
books.mount('#books')