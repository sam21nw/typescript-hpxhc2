// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log('hello');

type Employee = {
  name?: string;
  active: boolean;
  stack: string[];
};

let emp1: Employee = {
  active: false,
  stack: ['JS', 'TS', 'CSS'],
};

function greetEmployee(employee: Employee): string {
  if (employee.name) {
    return `Hello ${employee.name}`;
  }
  return `Hello Dude`;
}

console.log(greetEmployee(emp1));
