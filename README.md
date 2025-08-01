# Coffee Machine Project

This project implements a simple coffee machine that allows users to select a coffee cup size and the number of sugar spoons. It includes validation for user selections and provides feedback for invalid inputs.

## Features

- Select coffee cup size: small, medium, or large.
- Choose the number of sugar spoons (0 or more).
- Validation for cup size and sugar spoon selection.
- Display order details.

## Installation

To get started with the coffee machine project, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd coffee-machine
npm install
```

## Usage

To use the coffee machine, you can create an instance of the `CoffeeMachine` class from the `src/coffeeMachine.js` file. Here’s an example:

```javascript
import { CoffeeMachine } from './src/coffeeMachine';

const machine = new CoffeeMachine();
machine.selectCupSize('medium');
machine.addSugar(2);
console.log(machine.getOrderDetails());
```

## Running Tests

To run the unit tests for the coffee machine, use the following command:

```bash
npm test
```

This will execute the tests defined in the `tests/coffeeMachine.test.js` file.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.#   C o f f e e - m a c h i n e  
 