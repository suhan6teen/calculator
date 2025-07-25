class Calculator {
    private result: number;

    constructor() {
        this.result = 0;
    }

    add(value: number): number {
        this.result += value;
        return this.result;
    }

    subtract(value: number): number {
        this.result -= value;
        return this.result;
    }

    multiply(value: number): number {
        this.result *= value;
        return this.result;
    }

    divide(value: number): number {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= value;
        return this.result;
    }

    getResult(): number {
        return this.result;
    }

    clear(): void {
        this.result = 0;
    }
}

export default Calculator;