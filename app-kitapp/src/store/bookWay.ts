import {defineStore} from 'pinia'

export const bookWayStore = defineStore('bookWay', {
    state: () => ({
        bookWay: 'paper',
        layout: true,
        bookCounter: 0,
        showForm: false,
        searchWord: '',
        searchClickedStatus: false,
    }),
    actions: {
        changeBookWay(selectedBookWay: string){
            this.bookWay = selectedBookWay
        },
        isPaperActive(){
            return this.bookWay === 'paper'
        },
        changeLayout(){
            this.layout = !this.layout
        },
        changeFormVisibility(){
            this.showForm = !this.showForm
        },

    }
})