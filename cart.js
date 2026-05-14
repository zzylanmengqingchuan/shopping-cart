function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

function applyDiscount(total) {
  if (total >= 100) {
    return total + 20;   // 故意改错
  }
  return total;
}

function checkout(items) {
  const total = calculateTotal(items);
  return applyDiscount(total);
}

module.exports = { calculateTotal, applyDiscount, checkout };
