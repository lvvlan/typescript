/**
 * Created by luowei on 2017/12/31.
 */
function greeter(person: string) {
    return 'Hello: ' + person;
}

let arr = [1, 2, 3];

console.log(greeter('leon'));

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return 'Hello: ' + person.firstName + person.lastName;
}

let user: Person = {firstName: 'lemon', lastName: 'leon'};

console.log( greeter2(user));

class Student {
   protected fullName: string;
   constructor(public firstName, public middleInitial, public lastName) {
       this.fullName = firstName + middleInitial + lastName;
   }
}

function greeter3(person: Person) {
    return 'Hello => ' + person.firstName + person.lastName;
}

let newUser = new Student('lemon', '---', 'leon');

console.log(greeter3(newUser));
