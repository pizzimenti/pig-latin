var pigLatin = function(englishPhrase) {
//   var vowels = ['a','e','i','o','u']
//
//   for (var index = 0; index < 5; index +=1) {
//
//     if (englishPhrase[0] === vowels[index]) {
//     return englishPhrase + "ay";
//   }
// }
//
//   } else if (englishPhrase[1] === 'a' || englishPhrase[1] === 'e' || englishPhrase[1] === 'i' || englishPhrase[1] === 'o' || englishPhrase[1] === 'u') {
//      return englishPhrase.slice(1) + englishPhrase[0] + "ay";
//



  if (englishPhrase[0] === 'a' || englishPhrase[0] === 'e' || englishPhrase[0] === 'i' || englishPhrase[0] === 'o' || englishPhrase[0] === 'u') {
    return englishPhrase + "ay";
  } else if (englishPhrase[1] === 'a' || englishPhrase[1] === 'e' || englishPhrase[1] === 'i' || englishPhrase[1] === 'o' || englishPhrase[1] === 'u') {
     return englishPhrase.slice(1) + englishPhrase[0] + "ay";
  }
  return englishPhrase.slice(2) + englishPhrase[0] + englishPhrase[1] + "ay";
};
