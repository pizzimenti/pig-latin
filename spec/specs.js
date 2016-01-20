describe('pigLatin', function() {
  it("it adds 'ay' to the end of all words", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("relocates consonants from front to end of word", function() {
    expect(pigLatin("lunch")).to.equal("unchlay");
  });

});
