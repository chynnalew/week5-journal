export function Entry (title, body) {
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
  let consonantCount = 0;
  let arrayBody = this.body.split("");
  for (let i = 0; i <arrayBody.length; i++ ){
    for (let j = 0; j<vowel.length; j++){
      if (arrayBody[i] === vowel[j]){
        vowelCount ++;
      } else {
        consonantCount ++;
      }
    }
  }
  return vowelCount;   
}



