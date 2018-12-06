class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
         return 'Hi I am ' + this.name +
        '; I am ' + this.age + ' years old.';
    }
}

// const joe = new Person('Joe', 66);
// const caro = new Person('Caro', 66 );
// const ben = new Person('Ben', 36);

// joe.greet();
// caro.greet();

const us = [new Person('Joe', 66),
            new Person('Caro', 66 ),
            new Person('Ben', 36),
            new Person('Rach', 29)];

const aboutUs = us.map(one => one.greet());

const oldOnes = us.filter(one => one.age > 40);

const destructuredOnes = us.map( ({ name, age }) => {return {name, age} });

const [ first,,third] = us;

console.log(us);
// console.log(aboutUs);
// console.log(oldOnes);
// console.log(destructuredOnes);
console.log(first,third);
