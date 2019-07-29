import { AllTaxBrackets, incomeTaxWithholdings } from "./fedtax";

const defaultBaseAllowance = 76.9;
const marriedTaxBrackets = [
    { income: 0, taxRate: 0, baseTax: 0 },
    { income: 165, taxRate: 0.1, baseTax: 0 },
    { income: 520, taxRate: 0.15, baseTax: 35.5 },
    { income: 1606, taxRate: 0.25, baseTax: 198.4 },
    { income: 3073, taxRate: 0.28, baseTax: 565.15 },
    { income: 4597, taxRate: 0.33, baseTax: 991.87 },
    { income: 8079, taxRate: 0.35, baseTax: 2140.93 },
    { income: 9105, taxRate: 0.396, baseTax: 2500.03 }
];

const singleTaxBrackets = [
    { income: 0, taxRate: 0, baseTax: 0 },
    { income: 44, taxRate: 0.1, baseTax: 0 },
    { income: 222, taxRate: 0.15, baseTax: 17.8 },
    { income: 764, taxRate: 0.25, baseTax: 99.1 },
    { income: 1789, taxRate: 0.28, baseTax: 355.35 },
    { income: 3685, taxRate: 0.33, baseTax: 886.23 },
    { income: 7958, taxRate: 0.35, baseTax: 2296.32 },
    { income: 7990, taxRate: 0.396, baseTax: 2307.52 }
];

const allTaxBrackets: AllTaxBrackets = {
    married: marriedTaxBrackets,
    single: singleTaxBrackets
};

test("should calculate tax holdings for unmarried person with 2 allowances", () => {
    expect(
        incomeTaxWithholdings(false, 2, 800, defaultBaseAllowance, allTaxBrackets)
    ).toEqual(81.43);
});

test("should calculate tax holdings for married person with 2 allowances", () => {
    expect(
        incomeTaxWithholdings(true, 2, 800, defaultBaseAllowance, allTaxBrackets)
    ).toBeCloseTo(54.43, 2);
});