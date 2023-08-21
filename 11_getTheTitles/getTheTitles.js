const getTheTitles = function (array) {
  return array.map((book) => book.title);

  //   long method
  //   let array = [];
  //   for (let i = 0; i < books.length; i++) {
  //     array += books[i].title;
  //   }
  //   return array;
};

// Do not edit below this line
module.exports = getTheTitles;
