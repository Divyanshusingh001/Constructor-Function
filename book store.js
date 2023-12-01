
// Author constructor function

function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
 
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
 
  Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log('-----------------------------');
  };
  
  let author1 = new Author('John Smith', 1980, 'American');
  let author2 = new Author('Jane Doe', 1975, 'British');
  
  let book1 = new Book('The Great Adventure', author1, 'Adventure', 20);
  let book2 = new Book('Mystery in the Manor', author2, 'Mystery', 15);
  let book3 = new Book('Fantasy World', author1, 'Fantasy', 25);
  
  
  book1.getBookInfo();
  book2.getBookInfo();
  book3.getBookInfo();
  