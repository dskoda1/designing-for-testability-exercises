import { hello } from "./hello";


test('Hello function should return "Hello, world!"', () => {
    expect(hello()).toEqual('Hello, world!');
});