const expect = require('chai').expect;
const bubbleSort = require('../lib/bubblesort');

describe('Bubble sort', () => {

  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function'); 
  });
  
  it('should return [0,1,2,3]', () => {
    expect(bubbleSort([3,1,2,0])).to.deep.equal([0,1,2,3]);
  });

  it('should return [-1, 9, 100, 566]', () => {
    expect(bubbleSort([100, 9, -1, 566])).to.deep.equal([-1,9,100,566]); 
  });

  it('should return [-1, 0.1, 0.2, 0.3, 0.3333, 1, 33.9, 33.999, 136, 169, 20000000000]', () => {
    expect(bubbleSort([169, 136,33.999, 33.9, 0.3, 0.2, 0.3333, 0.1, 1,-1,2e10]))
      .to.deep.equal([-1, 0.1, 0.2, 0.3, 0.3333, 1, 33.9, 33.999, 136, 169, 20000000000]); 
  });

  it('should return an empty array for []', () => {
    expect(bubbleSort([])).to.deep.equal([]);
  });
  
  it('should return an empty array for null', () => {
    expect(bubbleSort(null)).to.deep.equal([]);
  });

  it('should return an empty array when passed in empty string', () => {
    expect(bubbleSort('')).to.deep.equal([]);
  });

});

