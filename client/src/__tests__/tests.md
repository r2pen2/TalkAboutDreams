# Unit Testing
Unit testing is done in [Jest](https://jestjs.io/). You can install Jest by running:
```bash
npm install --save-dev jest
```

Tests run on pushes to the Github repository.

## Writing Tests
To write a test, create a test file in the `./__tests__` directory for whichever file you're testing. For example, imagine we have a `sum.ts` file with a function for adding two numbers together.
```typescript
function sum(a: number, b: number): number {
  return a + b;
}
module.exports = sum;
```
A test file can be created as `./__tests__/sum.test.js`:
```javascript
const sum = require("../sum.ts");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

## Running Tests
I've added a `test` script to [the client](#the-client), so tests can be run by typing `npm test` in the console. Jest will print the result:
```bash
PASS ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```