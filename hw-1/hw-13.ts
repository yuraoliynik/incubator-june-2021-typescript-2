// *** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class Shape {
    abstract perimeter(): number;
    abstract area(): number;
}

class Triangle extends Shape {
    sideA: number;
    sideB: number;
    sideC: number;
    height: number;

    constructor(sideA, sideB, sideC, height) {
        super();

        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.height = height;
    }

    perimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    };

    area(): number {
        return this.sideA * this.height / 2;
    };
}

class Rectangle extends Shape {
    length: number;
    width: number;

    constructor(length, width) {
        super();

        this.length = length;
        this.width = width;
    }

    perimeter(): number {
        return (this.length + this.width) * 2;
    };

    area(): number {
        return this.length * this.width;
    };
}

const triangle1: Triangle  = new Triangle(40, 32, 30, 24);
const triangle2: Triangle = new Triangle(58, 60, 40, 45);

const rectangle1: Rectangle = new Rectangle(30, 20);
const rectangle2: Rectangle = new Rectangle(40,15);
const rectangle3: Rectangle = new Rectangle(20,45);

const arr: Shape[] = [
    triangle1,
    triangle2,
    rectangle1,
    rectangle2,
    rectangle3
];

arr.forEach(item => console.log(item.area()));
