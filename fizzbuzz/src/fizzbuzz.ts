const FizzBuzz = (input: number): string => {
  const isFactor = (value: number, base: number): boolean => value % base === 0;
  if (isFactor(input, 3) && isFactor(input, 5)) {
    return "fizzbuzz";
  }
  if (isFactor(input, 5)) {
    return "buzz";
  }
  if (isFactor(input, 3)) {
    return "fizz";
  }
  return input.toString(10);
};

export { FizzBuzz };
