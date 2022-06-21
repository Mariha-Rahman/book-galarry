//load input data
const inputData = () => {
    const inputValue = document.getElementById('input-field').value
    document.getElementById('input-field').value = ''
    loadBook(inputValue);
};

const loadBook = (inputValue) => {
    const url = `https://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs));
}

//function for display book
const displayBook = (books) => {
    // console.log(books)
    const container = document.getElementById('container');
    container.textContent = '';

    //error msg.....
    if (books.length === 0) {
        const totalResult = document.getElementById('total')
        totalResult.innerText = 'Sorry, No Result Found'
    }
    else {
        const totalResult = document.getElementById('total')
        totalResult.innerHTML = `
    <h3 >Total Search Result: ${books.length}</h3>
    `
    }
    //................
    books.forEach(book => {
        // console.log(book)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `              
                <div style="background-color:ivory; border: 2px solid khaki;text-align: center; border-radius:10px" class="card h-100 ">
               
                    <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${book.title.slice(0, 30)}</h5>
                     <h5> Author: ${book.author_name[0]}</h5>
                        <p class="card-text">Publisher:${book.publisher[0]}</p>
                        <p class="card-text"> 
                        First publish year: ${book.publish_year[0]}</p>
                    </div>
                </div>  `;

        container.appendChild(div)
    })
}
