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
  let arrayBody = this.body.split("");
  for (let i = 0; i <arrayBody.length; i++ ){
    for (let j = 0; j<vowel.length; j++){
      if (arrayBody[i] === vowel[j]){
        vowelCount ++;
      } 
    }
  }
  return vowelCount;   
}

Entry.prototype.numberOfConsonants = function() {
  let consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  let consonantCount = 0;
  for (let i = 0; i < this.body.length; i ++){
    for ( let j = 0; j <consonant.length; j ++){
      if (this.body[i] === consonant[j]){
        consonantCount ++;
      }
    }
  }
  return consonantCount;
}

Entry.prototype.firstSentence = function() {
  let sentenceArray = this.entry.split(/[\\.!\?]/);
  let firstSentence = sentenceArray[0];
  if (firstSentence.length < 8) {
    return firstSentence;
  }
}


// .split(".", 1)[0];
