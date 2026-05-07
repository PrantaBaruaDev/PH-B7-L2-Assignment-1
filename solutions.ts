//* ===================== Solution 1: =====================
const filterEvenNumbers = (inputArray: Array<number>) => {
    let evenNumbers: Array<number> = [];

    inputArray.forEach((value) => {
        if(value % 2 === 0){
            evenNumbers.push(value);
        }
    });

    return evenNumbers;
}

// Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//* ===================== Solution 2: ===================== 
const reverseString = (input: string) => {
    return input.split("").reverse().join("");
}
// Sample Input:
reverseString("typescript");

//* ===================== Solution 3: =====================
type StringOrNumber = string | number;

const checkType = (checkInput: StringOrNumber) => {
    if(typeof checkInput === 'string') {
        return "String";
    } else if(typeof checkInput === 'number') {
        return "Number";
    }
}

// Sample Input:
checkType("Hello");
checkType(42);

//* ===================== Solution 4: =====================
const getProperty = <T, K extends keyof T>(userObj: T, key: K): T[K] => userObj[key];

// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

//* ===================== Solution 5: =====================
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

interface BookStatus extends Book{
    isRead?: boolean;
}

const toggleReadStatus = (book: BookStatus): BookStatus => {
    return { ...book, isRead: book.isRead ?? true };
}

// Sample Input:
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

//* ===================== Solution 6: =====================
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);

        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Sample Input:
const student = new Student("Alice", 20, "A");
student.getDetails();

//* ===================== Solution 7: =====================
const getIntersection = (arr1: Array<number>, arr2: Array<number>) => {
    let resultIntersectionSet: Set<number> = new Set(arr1);

    let resultIntersection: Array<number> = Array.from(new Set(arr2.filter((value) => resultIntersectionSet.has(value))));

    return resultIntersection;
}
// Sample Input:
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
