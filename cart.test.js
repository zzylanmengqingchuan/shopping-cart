const { calculateTotal, applyDiscount, checkout } = require('./cart');

test('计算两件商品总价', () => {
  const items = [
    { name: '苹果', price: 5, quantity: 3 },
    { name: '牛奶', price: 8, quantity: 2 },
  ];
  expect(calculateTotal(items)).toBe(31);
});

test('满100减20折扣生效', () => {
  expect(applyDiscount(120)).toBe(100);
});

test('不满100不打折', () => {
  expect(applyDiscount(80)).toBe(80);
});

test('完整结账流程', () => {
  const items = [
    { name: '手机壳', price: 60, quantity: 2 },
  ];
  expect(checkout(items)).toBe(100);
});
