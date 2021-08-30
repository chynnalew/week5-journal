function Entry (title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function() {
  let lengthArray = this.body.split(" ");
  return lengthArray.length;
}

Entry.prototype.numberOfVowels = function () {
  let vowel = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (i = 0; i <=this.body; i++ ){
    if (vowel.includes(this.body[i])){
      vowelCount ++;
    } 
  }
}
