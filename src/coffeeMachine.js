// src/coffeeMachine.js

class CoffeeMachine {
    constructor() {
        this.cupSize = null;
        this.sugarSpoons = 0;
    }

    selectCupSize(size) {
        const validSizes = ['small', 'medium', 'large'];
        if (validSizes.includes(size)) {
            this.cupSize = size;
        } else {
            throw new Error('Invalid cup size selected. Please choose small, medium, or large.');
        }
    }

    addSugar(spoons) {
        if (typeof spoons === 'number' && spoons >= 0) {
            this.sugarSpoons = spoons;
        } else {
            throw new Error('Invalid number of sugar spoons. Please enter a non-negative number.');
        }
    }

    getOrderDetails() {
        if (!this.cupSize) {
            throw new Error('Cup size not selected.');
        }
        return `You have ordered a ${this.cupSize} coffee with ${this.sugarSpoons} sugar spoon(s).`;
    }
}

module.exports = CoffeeMachine;
