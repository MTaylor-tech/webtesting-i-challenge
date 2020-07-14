const enhancer = require('./enhancer.js');

const test_item = {
  durability: 50,
};
// test away!
describe("item enhancer unit tests", ()=>{
  it("repairs", ()=> {
    expect(enhancer.repair(test_item).durability).toBe(100);
  })
});
