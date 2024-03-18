const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const bookCardHtml = `
    <div class="book-card">
      <h2>Title: ${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
       <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
       <button class="" onclick="toggleReadStatus(${i})">Toggle Read</button></div>
  `;
    bookContainer.innerHTML += bookCardHtml;
  });
}

function removeBook(i) {
  myLibrary.splice(i, 1);
  displayBooks();
}

function toggleReadStatus(i) {
  myLibrary[i].read = !myLibrary[i].read;
  displayBooks();
}

const form = document.getElementById("book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.elements["title"].value;
  const author = form.elements["author"].value;
  const pages = form.elements["pages"].value;
  const read = form.elements["read"].checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayBooks();

  form.reset();
});

const book2 = new Book("Mike and Mice 🐭", "joe Richard", 281, false);
myLibrary.push(book2);

displayBooks();
