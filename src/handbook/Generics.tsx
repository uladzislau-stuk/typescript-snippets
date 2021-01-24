/* When to use generics
*
* To identify when to use a generic type,you
* can consider two things:
* Will this function or class be required to work with a
* variety of data types?
* Will this function or class be used in more than
* one place?
* */


/* Basics */

// two ways to call function
// 1) pass all of the arguments, including the type argument
// 2) type argument inference
function identity<T>(arg: T): T {
    return arg;
}

// 1)
let output1 = identity<string>("myString")
// 2)
let output2 = identity("myString")

/* Generic Types */

interface GenericIdentityFn<T> {
    (arg: T): T
}

// type as a call signature of an object literal type
let myIdentity1: { <T>(arg: T): T } = identity
let myIdentity2: <T>(arg: T) => T = identity
let myIdentity3: GenericIdentityFn<number> = identity


/* Generic Constraints */

// we constrain our function to work with any types
// that have length property, we’ll use this interface
// and the extends keyword to denote our constraint
interface Constraint {
    length: number;
}

function b<T extends Constraint> (arg: T): T {
    return arg
}

b([1]) // ok
b({length: 1}) // ok
b(1) // not ok

/* Using Type Parameters in Generic Constraints */
let x = { a: 1, b: 2, c: 3, d: 4 };

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


getProperty(x, "a");
getProperty(x, "m");


function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

f('string')
loggingIdentity([1, 2])


interface GenericListItemFn<T = {}> {
    (item: T & {value: string}): void;
}

type Item = {
    accountNumber: string;
    value: string;
}

function logValue<T>(val: T): T {
    console.log(val)
    return val;
}
