import axios from 'axios'
import { bookWayStore } from '../store/bookWay'

export const BookAdder = () => {
    const store = bookWayStore()
    const addBook = (book: any) => {
        axios.post('http://localhost:3000/books', {
            way: book.way,
            title: book.title,
            image: book.image,
            genre: book.genre,
            author: book.author,
            page: book.page,
            year: book.year
         }).then(res => {store.bookCounter = res.data.id; console.log('SS: ', res.data.id)}).catch(err => console.log(err))
    }

    return addBook
     
}