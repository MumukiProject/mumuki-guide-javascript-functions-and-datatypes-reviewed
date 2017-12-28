describe("", function() {
  it("previous(1) is 0", function() {
    assert.equal(previous(1), 0);
  });
  it("previous(10) is 9", function() {
    assert.equal(previous(10), 9);
  });
})


describe("triple", function() {
  it("triple(1) is 3", function() {
    assert.equal(triple(1), 3);
  });
  it("triple(3) is 9", function() {
    assert.equal(triple(3), 9);
  });
})

describe("previousOfTriple", function() {
  it("previousOfTriple(1) is 2", function() {
    assert.equal(previousOfTriple(1), 2);
  });
  it("previousOfTriple(3) is 8", function() {
    assert.equal(previousOfTriple(3), 8);
  });
  it("previousOfTriple(10) is 29", function() {
    assert.equal(previousOfTriple(10), 29);
  });
})
