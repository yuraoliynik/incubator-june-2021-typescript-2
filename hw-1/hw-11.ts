// 1) создать интерфейс на основе user и протипизировать функции:
//
//     const user = {
//         name:"Max",
//         age:18,
//         gender:'male'
//     }
//
// function sum(a,b){
//     return a+b
// }
//
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)

interface User {
    name: string;
    age: number;
    gender: string;
}

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: User, inc: number): User {
    someUser.age += inc;

    return someUser;
}

const user = {
    name: "Max",
    age: 18,
    gender: 'male'
};

console.log(sum(1, 2));

showSum(2, 3);

incAge(user, 2);