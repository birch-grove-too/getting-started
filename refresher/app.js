class NameField {
    constructor(name) {
        console.log('this in NewField: ');
        console.log(this);
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        console.log('this in NameGenerator: ');
        console.log(this);
        const btn = document.querySelector('button');
        this.names = ['Max', 'Manu', 'Anna'];
        this.currentName = 0;

        // the below calls accomplish the same end - tying this to the NameGenerator context vs 
        // the 'execution context' (that James used to try to tell me about...)
        // the second way uses 'next-Gen' syntax, employing one feature of the arrow operator
        //      - binding 'this'
//        btn.addEventListener('click', this.addName.bind(this));
        btn.addEventListener('click', () => { this.addName() });
    }

    addName() {
        console.log('this in addName: ');
        console.log(this);
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if (this.currentName >= this.names.length) {
            this.currentName = 0
        };
    }
}

// creating new NameGenerator registers the listener on the Button
const gen = new NameGenerator();