"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'boolean') {
        return !value;
    }
};
formatValue('hello');
formatValue(5);
formatValue(true);
const getLength = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
};
getLength('typescript');
getLength([10, 20, 30, 40]);
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}
const person1 = new Person('John Doe', 30);
person1.getDetails();
const person2 = new Person('Alice', 25);
person2.getDetails();
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
const filterByRating = (arr) => {
    return arr.filter((item) => item?.rating >= 4);
};
filterByRating(books);
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
const filterActiveUsers = (arr) => {
    return arr.filter((user) => user?.isActive === true);
};
filterActiveUsers(users);
const myBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};
const printBookDetails = (myBook) => {
    const { title, author, publishedYear, isAvailable } = myBook;
    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable}`;
};
printBookDetails(myBook);
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const getUniqueValues = (arr1, arr2) => {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr1[i]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result[result.length] = Number(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr2[i]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result[result.length] = Number(arr2[i]);
        }
    }
    return result;
};
getUniqueValues(array1, array2);
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
const p = [];
const calculateTotalPrice = (products) => {
    let totalPrice = products.reduce((acc, item) => {
        const amountPerProduct = item.price * item.quantity;
        if (item.discount !== undefined && item.discount > 0 && item.discount < 100) {
            const discountedPrice = amountPerProduct * (item.discount / 100);
            const result = amountPerProduct - discountedPrice;
            return acc + result;
        }
        return acc + amountPerProduct;
    }, 0);
    return totalPrice;
};
calculateTotalPrice(products);
//# sourceMappingURL=solution.js.map