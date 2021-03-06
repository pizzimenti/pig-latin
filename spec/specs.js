describe('pigLatin', function() {
  it("it adds 'ay' to the end of all words", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  })

  it("relocates first consonant from beginning to end of word", function() {
    expect(pigLatin("lunch")).to.equal("unchlay");
  })
  it("relocates first and second consonant from the beginning to the end of word", function() {
    expect(pigLatin("change")).to.equal("angechay");
  })
  it("relocates 'qu' from beginning to the end of word", function() {
    expect(pigLatin("queen")).to.equal("eenquay");
  });

  //This does not work yet. We need some way to keep looping through our code for each letter.
  it ("handles multiple words", function () {
    expect(pigLatin("yellow cat")).to.equal("ellowyay atcay")
  });
});
