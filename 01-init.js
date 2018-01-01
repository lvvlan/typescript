/**
 * Created by luowei on 2017/12/31.
 */
function greeter(person) {
    return 'Hello: ' + person;
}
var arr = [1, 2, 3];
console.log(greeter('leon'));
function greeter2(person) {
    return 'Hello: ' + person.firstName + person.lastName;
}
var user = { firstName: 'lemon', lastName: 'leon' };
console.log(greeter2(user));
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return 'Hello => ' + person.firstName + person.lastName;
}
var newUser = new Student('lemon', '---', 'leon');
console.log(greeter3(newUser));
