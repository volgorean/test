describe('wordPigLatin', function() {
  it(' adds ay for word that start with a vowel add ay to the end.', function() {
    wordPigLatin("europe").should.equal("europeay");
  });   
});
