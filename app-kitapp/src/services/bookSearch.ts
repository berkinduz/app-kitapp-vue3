export const bookSearch = (searchWord: string) => {
    const books = fetch(`http://localhost:3000/books?title_like=${searchWord}`)
    .then(res => res.json()).catch(err => console.log(err))

    console.log('BOOKS: ', books)
    return books

}