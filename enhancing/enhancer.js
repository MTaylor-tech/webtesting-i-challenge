function succeed(item) {
  let newItem = {...item};
  if (item.enhancement === 20) {
    return newItem;
  } else {
    newItem.enhancement++;
    return newItem;
  }
}

function fail(item) {
  let newItem = { ...item };
  if (item.enhancement<15) {
    newItem.durability -= 5;
    if (newItem.durability<0) {
      newItem.durability = 0;
    }
  } else {
    newItem.durability -= 10;
    if (newItem.durability<0) {
      newItem.durability = 0;
    }
    if (item.enhancement>16) {
      newItem.enhancement--;
    }
  }
  return newItem;
}

function repair(item) {
  const newItem = {
    ...item,
    durability: 100,
  }
  return newItem;
}

function get(item) {
  return { ...item };
}

module.exports = {
  succeed,
  fail,
  repair,
  get,
};
