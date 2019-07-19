const expect = require('expect.js')
const lookAndSee = require('../src/kata')

describe('Kata ' , () => {
  it('Should print 1 when seed = 1 and times = 1', () => {
    let result = lookAndSee('1', 1);
    expect(result).to.eql(['1']);
  })

  it('Should print 1 when seed = 2 and times = 1', () => {
    let result = lookAndSee('2', 1);
    expect(result).to.eql(['2']);
  })

  it('Should print 1 when seed = 1 and times = 2', () => {
    let result = lookAndSee('1', 2);
    expect(result).to.eql(['1', '11']);
  })

  it('Should print 1 when seed = 2 and times = 2', () => {
    let result = lookAndSee('2', 2);
    expect(result).to.eql(['2', '12']);
  })

  it('Should print 1 when seed = 2 and times = 3', () => {
    let result = lookAndSee('2', 3);
    expect(result).to.eql(['2', '12', '1112']);
  })
})
