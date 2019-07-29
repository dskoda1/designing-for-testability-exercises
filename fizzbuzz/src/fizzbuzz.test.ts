import { FizzBuzz } from "./fizzbuzz";

describe("Fizzbuzz algorithm", () => {
  test.each`
    input | output
    ${3}  | ${"fizz"}
    ${9}  | ${"fizz"}
    ${12} | ${"fizz"}
    ${18} | ${"fizz"}
  `(
    'It returns "fizz" when input is a multiple of 3: $input => $output',
    ({ input, output }) => {
      expect(FizzBuzz(input)).toEqual(output);
    }
  );
  test.each`
    input | output
    ${5}  | ${"buzz"}
    ${10} | ${"buzz"}
    ${20} | ${"buzz"}
  `(
    'It returns "buzz" when input is a multiple of 5: $input => $output',
    ({ input, output }) => {
      expect(FizzBuzz(input)).toEqual(output);
    }
  );

  test.each`
    input | output
    ${15} | ${"fizzbuzz"}
    ${30} | ${"fizzbuzz"}
    ${45} | ${"fizzbuzz"}
  `(
    'It returns "fizzbuzz" when input is a multiple of 3 and 5: $input => $output',
    ({ input, output }) => {
      expect(FizzBuzz(input)).toEqual(output);
    }
  );

  test.each`
    input | output
    ${1}  | ${"1"}
    ${2}  | ${"2"}
    ${4}  | ${"4"}
    ${6}  | ${"6"}
    ${7}  | ${"7"}
    ${8}  | ${"8"}
    ${11} | ${"11"}
  `(
    "It returns the number in string otherwise: $input => $output",
    ({ input, output }) => {
      expect(FizzBuzz(input)).toEqual(output);
    }
  );
});
