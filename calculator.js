const principalInput = document.getElementById("principal");
const interestRateInput = document.getElementById("interest");
const yearsInput = document.getElementById("years");
const compoundFrequencyInput = document.getElementById('compoundingFrequency');
const contributionInput = document.getElementById('contribution');
const contributionFrequencyInput = document.getElementById('contribution-frequency');
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

function getContributionFrequency() {
    switch (contributionFrequencyInput.value) {
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
    const principal = parseFloat(principalInput.value);
    const interestRate = parseFloat(interestRateInput.value);
    const years = parseFloat(yearsInput.value);
    const compoundingFrequency = getCompoundingFrequency();
    const contribution = parseFloat(contributionInput.value);
    const contributionFrequency = getContributionFrequency();

    if (isNaN(principal) || isNaN(interestRate) || isNaN(years) || isNaN(contribution)) {
        result.textContent = 'Enter values for all fields';
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

    if (contribution < 0) {
        result.textContent = "Contribution cannot be negative";
        return;
    }

    // Convert interest rate percentage --> decimal
    const decimalInterestRate = parseFloat(interestRate) / 100;

    if (contribution == 0) {
        // Calculate with A = P(1 + r/n)^(nt)
        const amount = principal * Math.pow(1 + (decimalInterestRate / compoundingFrequency), compoundingFrequency * years);
        // formatting to have 2 decimal places and commas
        const formattedNum = (+amount.toFixed(2)).toLocaleString('en-US');
        result.textContent = `Final Amount: $${formattedNum}`;
    }

    else {
        // Calculate with A = P(1 + r/n)^(nt)
        const initialAmt = principal * Math.pow(1 + (decimalInterestRate / compoundingFrequency), compoundingFrequency * years);
        const contributionAmt = contribution * contributionFrequency * (Math.pow(1 + decimalInterestRate / compoundingFrequency, compoundingFrequency * years) - 1) / decimalInterestRate;
        // formatting to have 2 decimal places and commas
        const formattedNum = (+(initialAmt + contributionAmt).toFixed(2)).toLocaleString('en-US');
        result.textContent = `Final Amount: $${formattedNum}`;
    }
}
