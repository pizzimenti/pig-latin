describe('pigLatin', function() {
  it("it adds '-ay' to the end of all words", function() {
    expect(pigLatin("apple")).to.equal("apple-ay");
  });
});
