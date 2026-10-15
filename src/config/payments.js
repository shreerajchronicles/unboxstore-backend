// Cash on delivery is confirmed with a small online payment, so every order —
// COD included — goes through the payment gateway once.
const COD_FEE = 100

const PAYMENT_OPTIONS = ['upi', 'card', 'netbanking', 'cod']

function isRazorpayEnabled() {
  return Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET)
}

// Local dev / e2e without Razorpay keys: payments are simulated. Never in production.
function isMockPaymentsEnabled() {
  return !isRazorpayEnabled() && process.env.NODE_ENV !== 'production'
}

module.exports = { COD_FEE, PAYMENT_OPTIONS, isRazorpayEnabled, isMockPaymentsEnabled }
