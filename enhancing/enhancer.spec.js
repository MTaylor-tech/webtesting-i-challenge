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
    const oldItem = test_items[0];
    const newItem = enhancer.repair(oldItem);
    expect(newItem.durability).toBe(100);
    expect(oldItem.durability).toBe(10);
    expect(oldItem).toEqual(test_items[0]);
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
    expect(oldItem).toEqual(test_items[0]);
  });
  it("fails on enhancement", ()=> {
    let newItem = enhancer.fail(test_items[0]);
    expect(newItem.enhancement).toBe(0);
    expect(newItem.durability).toBe(5);
    newItem = enhancer.fail(test_items[1]);
    expect(newItem.enhancement).toBe(10);
    expect(newItem.durability).toBe(45);
    newItem = enhancer.fail(test_items[2]);
    expect(newItem.enhancement).toBe(15);
    expect(newItem.durability).toBe(65);
    newItem = enhancer.fail(test_items[3]);
    expect(newItem.enhancement).toBe(16);
    expect(newItem.durability).toBe(70);
    newItem = enhancer.fail(test_items[4]);
    expect(newItem.enhancement).toBe(19);
    expect(newItem.durability).toBe(90);
  });
  it("fails without modifying item", ()=> {
    const oldItem = test_items[4];
    const newItem = enhancer.fail(oldItem);
    expect(newItem.enhancement).toBe(19);
    expect(oldItem.enhancement).toBe(20);
    expect(newItem.durability).toBe(90);
    expect(oldItem.durability).toBe(100);
    expect(oldItem).toEqual(test_items[4]);
  });
  it("gets a name altered according to the rules", ()=> {
    let newItem = enhancer.get(test_items[0]);
    expect(newItem.name).toBe("Low Item");
    newItem = enhancer.get(test_items[1]);
    expect(newItem.name).toBe("[+10] Mid Item");
    newItem = enhancer.get(test_items[2]);
    expect(newItem.name).toBe("[+15] Mid-High Item");
    newItem = enhancer.get(test_items[3]);
    expect(newItem.name).toBe("[+17] Mid-High Item 2");
    newItem = enhancer.get(test_items[4]);
    expect(newItem.name).toBe("[+20] High Item");
  });
  it("get the correct name without modifying item", ()=> {
    const oldItem = test_items[4];
    const newItem = enhancer.get(oldItem);
    expect(newItem.name).toBe("[+20] High Item");
    expect(oldItem.name).toBe("High Item");
    expect(oldItem).toEqual(test_items[4]);
  });
});
