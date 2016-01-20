describe('pigLatin', function() {
  it("it adds 'ay' to the end of all words", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  })

  it("relocates first consonant from front to end of word", function() {
    expect(pigLatin("lunch")).to.equal("unchlay");
  })
  it("relocates first and second consonant from the front to the back", function() {
    expect(pigLatin("aardvark")).to.equal("aardvarkay");
  })
});
