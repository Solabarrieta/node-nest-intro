const myName: string = 'Oier';
const myAge = 12;
console.log(myAge, myName);
const suma = (a: number, b: number) => {
  console.log(a + b);
};
suma(2, 5);

class Person {
  constructor(
    private age: number,
    public name: string,
  ) {}
  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const oier = new Person(24, 'Oier');
console.log(oier);
