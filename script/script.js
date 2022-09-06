let formInput = document.querySelectorAll('.form-input') 
let formBookSubmit = document.getElementById('new-book-form') 
let cardContainer = document.querySelector('.card-container') 
let totalBooks = document.querySelector('.total-books') 


let myLibrary = []

function Book(title, author, pages, hasBeenRead) {
  this.bookId = myLibrary.length
  this.title = title
  this.author = author
  this.pages = pages
  this.hasBeenRead = hasBeenRead
}
Book.prototype.saveBook = function() {
  
  let bookToSave = {
    bookId: this.bookId,
    title: this.title,
    author: this.author,
    pages: this.pages,
    hasBeenRead: this.hasBeenRead
  }

  myLibrary.unshift(bookToSave)

  render() 
}

function addBookToLibrary(e) {
  e.preventDefault() 

  let bookTitle = e.target[0].value 
  let bookAuthor = e.target[1].value 
  let bookPages = e.target[2].value 
  let hasBeenRead = e.target[3].value 

  let insertBook = new Book(bookTitle, bookAuthor, bookPages, hasBeenRead)

  insertBook.saveBook()

  
  modal.style.display = "none"

  
  formInput.forEach(function(item, index){
    item.value = ''
  })

  let deleteButton = document.querySelectorAll('.delete-button') 
  deleteButton.forEach(key => key.addEventListener('click', deleteFunc))
}


function render() {

  cardContainer.innerHTML = ''

  myLibrary.forEach(function(currentValue, index) {
    cardContainer.innerHTML += cardElement(currentValue)
  })

 
  renderBooks()
}


function renderBooks(){
  totalBooks.innerHTML = myLibrary.length
}


function cardElement(data) {
  return `
  <div class="card">
    <div class="card-top">
      <div class="content">
        <div class="left-side">
          <p>${data.hasBeenRead}</p>
        </div> <!-- left-side -->
        <div class="right-side">
          <p class="title"><b>${data.title}</b></p>
          <p>${data.author} - ${data.pages} pages</p>
        </div> <!-- right-side -->
      </div>
    </div> <!-- card-top -->
    <div class="card-bottom">
      <button class="read-button"><b>read</b></button>
      <button class="delete-button" data-book="${data.bookId}${data.pages}">delete</button>
    </div> <!-- card-bottom -->
  </div> <!-- card -->
  `
}


function deleteFunc(e){
  
  console.log(e.target.dataset.book)

}



render()

// form submit eventListener
formBookSubmit.addEventListener('submit', addBookToLibrary)
