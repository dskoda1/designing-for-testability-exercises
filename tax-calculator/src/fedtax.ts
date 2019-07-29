// Weekly Employee Income Withholding Calculator
// Originally by GitHub#Liath
// Based on IRS Circular E - http://www.irs.gov/pub/irs-pdf/p15.pdf
// Per the "Percentage Method"

export interface TaxBracket {
    income: number;
    taxRate: number;
    baseTax: number;
}

export interface AllTaxBrackets {
    single: Array<TaxBracket>;
    married: Array<TaxBracket>;
}

const getTaxBracket = (
    grossIncome: number,
    isMarried: boolean,
    allTaxBrackets: AllTaxBrackets
): TaxBracket => {
    let taxBrackets: Array<TaxBracket> = isMarried
        ? allTaxBrackets.married
        : allTaxBrackets.single;
    for (let i = 0; i < taxBrackets.length; i++) {
        // Find bracket
        if (taxBrackets[i].income > grossIncome) {
            return taxBrackets[i - 1]; // Get taxable income
        }
    }
    return null;
};

// Returns Federal Income Tax amount (Married, Allowances, Gross Income)
const incomeTaxWithholdings = function(
    isMarried: boolean,
    numAllowances,
    grossIncome,
    baseAllowance: number,
    allTaxBrackets: AllTaxBrackets
) {
    grossIncome -= baseAllowance * numAllowances; // Pay after allowances
    const bracket = getTaxBracket(grossIncome, isMarried, allTaxBrackets);
    grossIncome -= bracket.income; // Get taxable income
    return bracket.taxRate * grossIncome + bracket.baseTax;
};

export { incomeTaxWithholdings };