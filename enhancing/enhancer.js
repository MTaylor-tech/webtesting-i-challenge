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
  return { ...item };
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
