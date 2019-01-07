//Palindrome

function isPal(word = `Not a Pal`) {
  word.trim();

  if(!String(word)) {
    return console.log(`Please, enter a word(string)`)
  }
  let letters = [];

  let rword = ''; //Reversed

  for(let i = 0; i < word.length; i++) {
    letters.push(word[i])
  }

  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  if(rword === word) {
    return console.log(`isPal`);
  }

  else {
    return console.log(`nope`);
  }
}