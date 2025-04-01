// Compound Interest Calculator Function with Input Validation
function compoundInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRateInput = document.getElementById("interest").value;
    const years = parseInt(document.getElementById("years").value);
    const compoundingFrequency = parseInt(document.getElementById("compoundingFrequency").value);

    // Validate inputs
    if (principal < 0) {
        document.getElementById("result").textContent = "Principal cannot be negative";
        return;
    }
    if (years < 0) {
        document.getElementById("result").textContent = "Years cannot be negative";
        return;
    }
    if (compoundingFrequency <= 0) {
        document.getElementById("result").textContent = "Compounding frequency must be > 0";
        return;
    }

    // Convert interest rate percentage --> decimal
    const interestRate = parseFloat(interestRateInput) / 100;

    // Calculate with A = P(1 + r/n)^(nt)
    const amount = principal * Math.pow(1 + (interestRate / compoundingFrequency), compoundingFrequency * years);

    document.getElementById("result").textContent = `Final Amount: $${amount.toFixed(2)}`;
}
// End of Compound Interest Calculator Function
