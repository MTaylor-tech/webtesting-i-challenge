const enhancer = require('./enhancer.js');

const test_items = [
  {
    name: "Low Item",
    durability: 10,
    enhancement: 0
  },
  {
    name: "Mid Item",
    durability: 50,
    enhancement: 10,
  },
  {
    name: "Mid-High Item",
    durability: 75,
    enhancement: 15,
  },
  {
    name: "Mid-High Item 2",
    durability: 80,
    enhancement: 17,
  },
  {
    name: "High Item",
    durability: 100,
    enhancement: 20,
  }
];

// test away!
describe("item enhancer unit tests", ()=>{
  it("repairs", ()=> {
    expect(enhancer.repair(test_items[0]).durability).toBe(100);
    expect(enhancer.repair(test_items[1]).durability).toBe(100);
    expect(enhancer.repair(test_items[2]).durability).toBe(100);
    expect(enhancer.repair(test_items[3]).durability).toBe(100);
    expect(enhancer.repair(test_items[4]).durability).toBe(100);
  });
  it("repairs without modifying item", ()=> {
    expect(enhancer.repair(test_items[0]).durability).toBe(100);
    expect(test_items[0].durability).toBe(10);
  });
  it("succeeds on enhancement", ()=>{
    let newItem = enhancer.succeed(test_items[0]);
    expect(newItem.durability).toBe(10);
    expect(newItem.enhancement).toBe(1);
    newItem = enhancer.succeed(test_items[1]);
    expect(newItem.durability).toBe(50);
    expect(newItem.enhancement).toBe(11);
    newItem = enhancer.succeed(test_items[4]);
    expect(newItem.durability).toBe(100);
    expect(newItem.enhancement).toBe(20);
  });
  it("succeeds without modifying item", ()=>{
    const oldItem = test_items[0];
    const newItem = enhancer.succeed(oldItem);
    expect(newItem.enhancement).toBe(1);
    expect(oldItem.enhancement).toBe(0);
  });
});
