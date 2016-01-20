var pigLatin = function(englishPhrase) {
  if (englishPhrase[0] === 'a' || englishPhrase[0] === 'e' || englishPhrase[0] === 'i' || englishPhrase[0] === 'o' || englishPhrase[0] === 'u') {
    return englishPhrase + "ay";
  } else {
     return englishPhrase.slice(1) + englishPhrase[0] + "ay";
  }
}
