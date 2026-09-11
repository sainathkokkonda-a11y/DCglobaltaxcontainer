function calculateTax() {
  const amount = parseFloat(document.getElementById('taxAmount').value);
  const rate = parseFloat(document.getElementById('taxRate').value);
  const type = document.getElementById('taxType').value;
  const curr = document.getElementById('taxCurrencySymbol').value;

  if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate < 0) {
    alert("Please enter valid positive numbers for amount and tax rate.");
    return;
  }

  let base, tax, total;

  if (type === 'exclusive') {
    // Add Tax
    base = amount;
    tax = amount * (rate / 100);
    total = amount + tax;
  } else {
    // Remove Tax
    total = amount;
    base = amount / (1 + (rate / 100));
    tax = amount - base;
  }

  const formatCurrency = (num) => {
    return curr + ' ' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  document.getElementById('finalTotal').innerText = formatCurrency(total);
  document.getElementById('baseAmount').innerText = formatCurrency(base);
  document.getElementById('calculatedTax').innerText = formatCurrency(tax);
}

// Calculate automatically on page load
calculateTax();
