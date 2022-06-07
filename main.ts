class Instructor {
    _name:string;
    _role:string;
    constructor(name:string,role='assiment') {
        this._role = role;
        this._name = name;
    }

    renderDetails() {
        console.log(`${this._name} - ${this._role}`);
    }
    static helloWorld() {
        console.log('Hi there');
    }

    static canTeach(instructor:Instructor) {
        return (instructor._role == 'classrom');
    }
}

let juniorInstructor = new Instructor('Brain');
let seniorInstructor = new Instructor('Alice','classrom');

juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"
// "Brian can teach: false"
console.log(
    `${juniorInstructor._name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);

// "Alice can teach: true"
console.log(
    `${seniorInstructor._name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);