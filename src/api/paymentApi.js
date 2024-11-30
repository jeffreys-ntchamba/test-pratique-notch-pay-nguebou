export function processPayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve({ transactionId: `TR-${Date.now()}` });
      } else {
        reject(new Error("Transaction échouée"));
      }
    }, 2000);
  });
}
