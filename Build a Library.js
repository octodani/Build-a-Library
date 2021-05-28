class Media {
    constructor(title, genre) {
      this._title = title;
      this._genre = genre;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get genre() {
      return this._genre;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      return this.ratings.reduce((a, b) => a + b) / this.ratings.length;
      }
    set isCheckedOut(checkOut) {
      this._isCheckedOut = checkOut;
    }
    addRating(rate) {
      this._ratings.push(rate);
    }
  }
  
  class Book extends Media {
    constructor(title, author, genre, pages) {
      super(title);
      this._author = author;
      this._genre = genre; // Por qué no funciona super(genre);?
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, genre, director, runTime) {
      super(title);
      this._genre = genre; // Por qué no funciona super(genre);?
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runtime() {
      return this._runtime;
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 'Drama', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  console.log(historyOfEverything.ratings);
  
  const speed = new Movie('Speed', 'Action', 'Jan de Bont', 116)
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  console.log(speed);
  console.log(historyOfEverything);  