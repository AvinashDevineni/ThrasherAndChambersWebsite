const compoundFrequencyInput = document.getElementById('compoundingFrequency');
const result = document.getElementById("result");
document.getElementById("calculate").addEventListener("click", compoundInterest);

function getCompoundingFrequency() {
    switch (compoundFrequencyInput.value) {
        case 'daily':
            return 365;
        case 'monthly':
            return 12;
        case 'quarterly':
            return 4;
        case 'annually':
            return 1;
    }
}

function compoundInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interest").value);
    const years = parseFloat(document.getElementById("years").value);
    const compoundingFrequency = getCompoundingFrequency();

    if (isNaN(principal) || isNaN(interestRate) || isNaN(years)) {
        result.textContent = 'Enter numbers for all fields';
        return;
    }

    // Validate inputs
    if (principal < 0) {
        result.textContent = "Principal cannot be negative";
        return;
    }

    if (interestRate < 0) {
        result.textContent = "Interest rate cannot be negative";
        return;
    }

    if (years < 0) {
        result.textContent = "Years cannot be negative";
        return;
    }

    // Convert interest rate percentage --> decimal
    const decimalInterestRate = parseFloat(interestRate) / 100;

    // Calculate with A = P(1 + r/n)^(nt)
    const amount = principal * Math.pow(1 + (decimalInterestRate / compoundingFrequency), compoundingFrequency * years);

    result.textContent = `Final Amount: $${amount.toFixed(2)}`;
}
