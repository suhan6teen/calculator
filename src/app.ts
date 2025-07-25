// This file is the entry point of the application. It initializes the application and renders the Calculator component.

import { Calculator } from './components/Calculator';

const app = () => {
    const calculator = new Calculator();
    calculator.render();
};

app();