import { CoffeeMachine } from '../src/coffeeMachine';

describe('CoffeeMachine', () => {
    let coffeeMachine;

    beforeEach(() => {
        coffeeMachine = new CoffeeMachine();
    });

    test('should select small cup size', () => {
        coffeeMachine.selectCupSize('small');
        expect(coffeeMachine.getOrderDetails()).toBe('Cup size: small, Sugar spoons: 0');
    });

    test('should select medium cup size', () => {
        coffeeMachine.selectCupSize('medium');
        expect(coffeeMachine.getOrderDetails()).toBe('Cup size: medium, Sugar spoons: 0');
    });

    test('should select large cup size', () => {
        coffeeMachine.selectCupSize('large');
        expect(coffeeMachine.getOrderDetails()).toBe('Cup size: large, Sugar spoons: 0');
    });

    test('should add sugar spoons', () => {
        coffeeMachine.selectCupSize('medium');
        coffeeMachine.addSugar(2);
        expect(coffeeMachine.getOrderDetails()).toBe('Cup size: medium, Sugar spoons: 2');
    });

    test('should handle invalid cup size selection', () => {
        const result = coffeeMachine.selectCupSize('extra-large');
        expect(result).toBe('Invalid cup size selected.');
    });

    test('should handle invalid sugar spoon count', () => {
        coffeeMachine.selectCupSize('small');
        const result = coffeeMachine.addSugar(-1);
        expect(result).toBe('Invalid number of sugar spoons.');
    });

    test('should not allow more than 5 sugar spoons', () => {
        coffeeMachine.selectCupSize('large');
        coffeeMachine.addSugar(6);
        expect(coffeeMachine.getOrderDetails()).toBe('Cup size: large, Sugar spoons: 0');
    });
});