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
        .then(data => displayBook(data.docs))
}
//function for display book
const displayBook = (books) => {
    const container = document.getElementById('container')
    container.textContent = ''
    //error msg.....
    if (books.length === 0) {
        const errorDiv = document.createElement('div')
        errorDiv.classList.add('error')
        errorDiv.innerText = 'Sorry, No Result Found'
        container.appendChild(errorDiv)
    }
    //................
    books?.forEach(book => {

        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `        
                <div style="background-color:ivory; border: 2px solid khaki;text-align: justify; border-radius:10px" class="card h-100 ">
                    <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${book.title}</h5>
                     <h5> Author: ${book.author_name[0]}</h5>
                        <p class="card-text">Publisher:${book.publisher[0]}, 
                        First publish year: ${book.publish_year}</p>
                    </div>
                </div>
            
        `;
        container.appendChild(div)
    })
}
