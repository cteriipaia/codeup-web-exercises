"use strict";
(() => {
    fetch('http://localhost:300/books').then(resp =>resp.json()).then(data => console.log(data));
    fetch('http://localhost:300/books/4').then(resp =>resp.json()).then(data=>fetch('http://localhost:300/authors/' + data.authorId)).then(resp =>resp.json()).then(data => console.log(data));

    const createBook = async (book) => {
        try {
            const url = 'http://localhost:300/books', {
                const options= {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                };
                const resp = await fetch(url, options);
                const newBook = await resp.json();
                return newBook;
            }
        } catch (error) {
            console.error(error);
        }
    }
    const createAuthor = async (book) => {
        try {
            const url = 'http://localhost:300/authors', {
                const options= {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(author)
                };
                const resp = await fetch(url, options);
                const newAuthors = await resp.json();
                return newAuthors;
            }
        } catch (error) {
            console.error(error);
        }
    }
    const newBook => {
        "title": "Garfield at Large: His First Book",
            "authorId": 4,
            "publishedYear": 1980,
            "genre": "Daily Comic Strips",
            "summary": "The epic tale of a fat cat, and his cartoonist owner Jon.",
            "ISBN": "9780345320131"
    }

    createBook(newBook).then( () =>fetch('http://localhost:300/books')).then(resp => resp.json()).then(data => console.log(data));
})();