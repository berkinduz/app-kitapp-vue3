
export const bookGetter = () => {
        
        const books = fetch("http://localhost:3000/books")
        .then(res => res.json())

        return books

  
}