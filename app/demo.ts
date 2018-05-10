import { Theme } from 'Theme'

const burger: string = 'hamburger';        // String
const calories: string = 300;              // Numeric
const tasty: boolean = true;               // Boolean
const hotDog = 'hot dog';                  // Auto detected String
const dogCalories: number | undefined = undefined;  // String OR undefined
const someValue: number = undefined;  // Number


// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.
function speak(food: string, energy: number): void {
  console.log("Our " + food + " has " + energy + " calories.");
}

const demo = (food: string, energy: number): number  => {
  return `Our ${food} has ${energy} calories`;
}

speak(burger, calories);

demo(hotDog, calories);

const demo2 = (): void => {
  console.log(name);
  let name: string = `Dave's Tacos`;
  name = true;

  const foo: string = 'Foo';
  foo = 300;
}

const anyDemo = (): void => {
  let name: any = 'taco shack';
  name = true;
  name = 400;
  name = 'taco barn';
  name = undefined;

}

const undefinedDemo = (): void => {
  let nextValue: string | undefined;
  console.log(nextValue);

  let notherValue: string;
  console.log(notherValue);
}

const smartDemo = (): void => {
  // strictNull check = true
  let foo: HTMLElement | null = document.getElementById('foo');

  if (foo === null) {
     console.log(foo);
  } else {
    console.log(foo)
  }
}

//No implicit Any = true
const logName = (name): void => {
  console.log(name);
}

const theming = () => {
  const theme: Theme = {
    color: '123',
    spacing: 30,
  }

  const color = theme
}

const arrayFun = () => {
  const digits: number[] = [ 1, 2, 3, 'test']; // Array of numbers
  const digitstrings: (string|number)[] = [ 1, 2, 3, 'test']; // Array of numbers or strings
  const objects: {id: number, name: string}[] = [{id:1, name: 'foo'}, {id:2, name: 'bar'}];
  const themes: Theme[] = [{color:'a', spacing:3, fontSizes:3}]
}