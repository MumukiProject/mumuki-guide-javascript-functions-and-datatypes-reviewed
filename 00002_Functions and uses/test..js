describe("", function() {
  it("predecessor(1) is 0", function() {
    assert.equal(predecessor(1), 0);
  });
  it("predecessor(10) is 9", function() {
    assert.equal(predecessor(10), 9);
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

describe("predecessorOfTriple", function() {
  it("predecessorOfTriple(1) is 2", function() {
    assert.equal(predecessorOfTriple(1), 2);
  });
  it("predecessorOfTriple(3) is 8", function() {
    assert.equal(predecessorOfTriple(3), 8);
  });
  it("predecessorOfTriple(10) is 29", function() {
    assert.equal(predecessorOfTriple(10), 29);
  });
})
