export interface CalculatorInput {
    operand1: number;
    operand2: number;
    operation: 'add' | 'subtract' | 'multiply' | 'divide';
}

export interface CalculatorOutput {
    result: number;
    error?: string;
}