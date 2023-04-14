let array1 = [1, 2, 3];
let array2 = array1;

array2.push(4);

// console.log(array1);
// console.log(array2);

array1.pop();

// console.log(array1);
// console.log(array2);

let obj1 = { name: "ali" };
let obj2 = { name: "ali" };

// console.log(obj1 === obj2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2.push(4);

// console.log(arr1);
// console.log(arr2);

const obj3 = { name: "ali" };
const obj4 = { ...obj3 };

obj4.age = 21;

// console.log(obj3);
// console.log(obj4);

userData = {
    name: "ali",
    age: 21,
    address: {
        city: "Tehran",
        street: "IDK",
    },
};

let {
    name,
    age,
    address: { city, street },
} = userData;

age++;

// console.log(name, age, city, street);

const sum1 = (number1, number2) => number1 + number2;

// console.log(sum1(2, 3));

const sum2 = (number1, number2) => {
    let result = number1 + number2;
    return result * 2;
};

// console.log(sum2(2, 3));

const showMap = [1, 2, 3, 4];

const newShowMap = showMap.map((item) => {
    return item * 2;
});

// console.log(newShowMap);

class CarInfo {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    showInfo() {
        console.log(this.name + "--" + this.model);
    }
}

const car1 = new CarInfo("samand", "4charkh");
const car2 = new CarInfo("motor", "2charkh");
const car3 = new CarInfo("bike", "2charkh");

// car1.showInfo();
// car2.showInfo();
// car3.showInfo();

class SuperCar extends CarInfo {
    constructor(name, model, color) {
        super(name, model);
        this.color = color;
    }

    showMeEverything() {
        console.log(this);
    }
}

const car4 = new SuperCar("trailie", "18charkh", "pink");
car4.showMeEverything();
