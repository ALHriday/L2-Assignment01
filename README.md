## What are some differences between interfaces and types in TypeScript?
## Answer:
### ইন্টারফেস এবং টাইপের মধ্যে কিছু পার্থক্য রয়েছে। ইন্টারফেস শুধুমাত্র OBJECT এবং CLASS সাথে কাজ করতে পারে কিন্তু টাইপ যেকোনো Primitive এবং Non-primitive মানের সাথে কাজ করে।

## Example: 

```ts

interface Person {
    id : string,
    name: string
}

type User = {
    id : string,
    name: string
};

const value: number = 10;
const isActive: boolean = false;
const arr: number[] = [10, 20, 30];

```

## Provide an example of using union and intersection types in TypeScript.
## Answer: 
### 1. union (|): এটি এক ধরণের জাভাস্ক্রিপ্টের OR (||) condition এর মতো। হয় এটা, নয় ওটা|

## Example:

```ts

let id: string | number;
id = 12345;
id = 'abc';

const print = (val: string | number) => {
    console.log(val);
}

```
### 2. intersection (&): এটি এক ধরণের জাভাস্ক্রিপ্টের (&&) condition এর মতো। দুই টাইপের সব property লাগবে|

```ts

type Student = { roll: number };
type PersonInfo = { id: number, name: string };

type StudentDetails = Student & PersonInfo;

const studentD: StudentDetails = {
    id: 123,
    name: 'Rahim',
    roll: 10,
}

```
