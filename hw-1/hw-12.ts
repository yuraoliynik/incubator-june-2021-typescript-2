// // 2)написать интерфейс Animal который описывает:
// // -тип движения животного(плавает, ходит, бегает) типа стринг
// // -что умеет говорить тип стринг
// // -и функцию которая возвращает информацию о животном
// //
// // создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface Animal {
    moving: string;
    saying: string;

    info(): string;
}

class Cat implements Animal {
    moving: string;
    saying: string;

    info(): string {
        return `This is Cat. It ${this.moving} and ${this.saying}.`;
    }
}

class Bird implements Animal {
    moving: string;
    saying: string;

    info(): string {
        return `This is Bird. It ${this.moving} and ${this.saying}.`;
    }
}

class Fish implements Animal {
    moving: string;
    saying: string;

    info(): string {
        return `This is Fish. It ${this.moving} and ${this.saying}.`;
    }
}