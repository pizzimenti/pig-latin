var pigLatin = function(englishPhrase) {

  if (englishPhrase[0] === 'a' || englishPhrase[0] === 'e' || englishPhrase[0] === 'i' || englishPhrase[0] === 'o' || englishPhrase[0] === 'u') {
    return englishPhrase + "ay";

  } else if (englishPhrase[0] === 'q' && englishPhrase[1] === 'u') {
    return englishPhrase.slice(2) + englishPhrase[0] + englishPhrase[1] + "ay";


  } else if (englishPhrase[1] === 'a' || englishPhrase[1] === 'e' || englishPhrase[1] === 'i' || englishPhrase[1] === 'o' || englishPhrase[1] === 'u') {
     return englishPhrase.slice(1) + englishPhrase[0] + "ay";
  }
  return englishPhrase.slice(2) + englishPhrase[0] + englishPhrase[1] + "ay";

};



//   var vowels = ['a','e','i','o','u']
//
//   for (var index = 0; index < 5; index++) {
//
//     if (englishPhrase[0] === vowels[index]) {
//       var translatedPhrase = englishPhrase + "ay";
//       return translatedPhrase;
//     } else if (englishPhrase[1] != vowels[index]){
//
//       var translatedPhrase = englishPhrase.slice(1) + englishPhrase[0] + "ay";
//       return translatedPhrase;
//       } else {
//       var translatedPhrase = englishPhrase.slice(2) + englishPhrase[0] + englishPhrase[1] + "ay";
//       return translatedPhrase;
//       }
// }
