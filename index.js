document.getElementById("calculate").addEventListener("click", compoundInterest);

// Compound Interest Calculator Function with Input Validation
function compoundInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interest").value);
    const years = parseFloat(document.getElementById("years").value);
    const compoundingFrequency = parseFloat(document.getElementById("compoundingFrequency").value);

    // Validate inputs
    if (principal < 0) {
        document.getElementById("result").textContent = "Principal cannot be negative";
        return;
    }

    if (interestRate < 0) {
        document.getElementById("result").textContent = "Interest rate cannot be negative";
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
    const decimalInterestRate = parseFloat(interestRate) / 100;

    // Calculate with A = P(1 + r/n)^(nt)
    const amount = principal * Math.pow(1 + (decimalInterestRate / compoundingFrequency), compoundingFrequency * years);

    document.getElementById("result").textContent = `Final Amount: $${amount.toFixed(2)}`;
}
// End of Compound Interest Calculator Function