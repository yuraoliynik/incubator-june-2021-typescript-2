function myConsole(something: string) {
    console.log(something);
}

myConsole('Some text');
// myConsole(1234567890);
// myConsole([1, 2, 3]);

function myObject(obj: {str: string, num: number}) {
    console.log(obj);
}

myObject({str: 'text', num: 123});

function myObject2(obj: {str: string, num: number, bool?: boolean}) {
    console.log(obj);
}

myObject2({str: 'text', num: 123});
myObject2({str: 'text2', num: 456, bool: true});


class MyUser {
    name: string;
    age: number;
    status: boolean;

    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting() {

    };
}

function forMyUser(user: MyUser) {
    console.log(user);
}

const someUser = new MyUser('Dimon', 25, true);

forMyUser(someUser);

const userObj = {
    name: 'Dimon',
    age: 25,
    status: true
};

// forMyUser(userObj);

const myUserObj = {
    name: 'Dimon',
    age: 25,
    status: true,
    greeting() {
    }
};

forMyUser(myUserObj);

class anotherUser {
    name: string;
    age: number;
    status: boolean;

    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting?(): void {

    };
}

function forAnotherUser(user: anotherUser): void {
    console.log(user);
}

forAnotherUser({
    name: 'Dimon',
    age: 25,
    status: true
});

interface IUser {
    name: string;
    age: number;
    status?: boolean;

    greeting(msg: string);
}

function forInterface(user: IUser): void {
    console.log(user);
}

const user = {
    name: 'Kolia',
    age: 30,

    greeting(msg: string): void {
        console.log(`Hi! I am ${this.name}.`);
        console.log(`${msg}.`);
    }
};

forInterface(user);

const user2 = {
    name: 'Tolik',
    age: 23,
    greeting(): void {
        console.log(`Hi!`);
        console.log(`Hi! I am ${this.name}.`);
    }
};

const user3 = {
    name: 'Max',
    age: 33,

    greeting(): void {
        console.log(`Hi!`);
        console.log(`Hi! I am ${this.name}.`);
        console.log(`What is your name?`);
    }
};

forInterface(user2);
forInterface(user3);

class User implements IUser {
    name: string;
    age: number;
    status: boolean;
    skills: string[];

    greeting(msg: string) {
    }

}

const superUser = new User();

function forSuperUser(user: IUser):void {
    // user.skills;

    console.log(user);
}

forSuperUser(superUser);

interface A {
    a:string;
}

interface B {
    b: number;
}

class Main implements A, B {
    a: string;
    b: number;
}

let main = new Main();

function foo(x: A) {

}

function bar(x: B) {

}

foo(main);
bar(main);

let arr: string[] = ['abc', 'xyz'];
let arr2: Array<number> = [1, 2, 3];
let mixArr: [string, number, boolean, number] = ['abc', 1, true, 2];
