# Designing for Testability

These lab exercises are for the Designing for Testability course.

# Notes

Here are my notes for the course!

## Exercise 1

#### 1A

Q: Why does code need to be maintainable?  
A: So that it can be adjusted in the future, since requirements are always changing  

Q: Think of one or two of your company’s software-based products. How long ago were they written? What do you think will be the lifetime of this software?  
A: Few years at minimum if a product is useful and has management backing

Q: When did you last experience attempting to make a small change to some code  
A: Fairly often in the front end

Q: Why was the code hard to modify?  
A: Tests for our front end code are not consistent

#### 1B

Q: What makes code unmaintainable?  
A: Time constraints to release features, not writing enough tests, not thinking about edge cases, not thinking about future implications of design being chosen


## Exercise 2

Q: What changes would you recommend be made to the code at `[fedtax.js](./federal-tax/fedtax.js)`?

1. Make variable names more descriptive
2. Use const for variables, stop doing multiple assignments
3. Modify the function to stop using global variables
4. Extract some business logic out of the function

## Exercise 4

Completed setup of [tax-calculator](./tax-calculator) folder. Can run tests in typescrit using ts-jest.

## Exercise 5

Refactored `[fedtax.ts](./tax-calculator/src/fedtax.ts)` extensively. Main ways we tackled the refactor are:

1. Make variable names more descriptive  
2. Use dependency injection to pass magic numbers/inputs  
3. Use types to define the data structures  

## Exercise 6 

Implemented `[fizzbuzz.ts](./fizzbuzz/src/fizzbuzz.ts)` using TDD: `[fizzbuzz.test.ts](./fizzbuzz/src/fizzbuzz.test.ts)`