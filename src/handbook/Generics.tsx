// using type constraints in type parameters
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m");

// generic with constraints
interface Constraint {
    length: number;
}

function b<T extends Constraint> (arg: T): T {
    return arg
}

b([1]) // ok
b({length: 1}) // ok
b(1) // not ok
//

interface GenericIdentityFn<T> {
    (arg: T): T
}

function f<T>(arg: T): T {
    return arg;
}

// Generic Types
let myIdentity: { <T>(arg: T): T } = f
let myIdentity2: <T>(arg: T) => T = f
let myIdentity3: GenericIdentityFn<number> = f

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

f('string')
loggingIdentity([1, 2])