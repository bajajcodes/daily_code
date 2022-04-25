function Book(author, title, pages) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = false),
    (this.info = function () {
      return `Author: ${author} book: ${title} has ${pages} and ${
        !read ? "yet to read" : "finished"
      }.`;
    });
}

// var read = "gibberish";
console.log(Book());
console.log(new Book("A", "B", 1).info());
