const palindromes = function (word) {
  let modifiedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (modifiedWord.split("").reverse().join("") == modifiedWord) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
