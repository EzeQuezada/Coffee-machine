// tests/coffeeMachine.test.js

const CoffeeMachine = require('../src/coffeeMachine');

test('should throw error for invalid cup size', () => {
    expect(() => coffeeMachine.selectCupSize('extra-large'))
        .toThrow('Invalid cup size selected. Please choose small, medium, or large.');
});

test('should throw error for negative sugar', () => {
    coffeeMachine.selectCupSize('medium');
    expect(() => coffeeMachine.addSugar(-1))
        .toThrow('Invalid number of sugar spoons. Please enter a non-negative number.');
});

test('should throw error when getting order without selecting cup', () => {
    expect(() => coffeeMachine.getOrderDetails())
        .toThrow('Cup size not selected.');
});
