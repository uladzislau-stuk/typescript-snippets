// Ambient enums ?

// Reverse mapping
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
];

// in generated code will become
// let directions = [
//     0 /* Up */,
//     1 /* Down */,
//     2 /* Left */,
//     3 /* Right */
// ];



enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
}
/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

// Enums at runtime
enum B {
    Y = 2,
    Z = Y * 2
}

function b(obj: { B: number }) {
    return obj.B;
}

// Union enums and enum member types
enum A {
    Foo,
    Bar,
}

function a(x: A) {
    // This condition will always return 'true' since the types 'A.Foo' and 'A.Bar' have no overlap.
    if (x !== A.Foo || x !== A.Bar) {

    }
}

a(5)

// auto incrementing behaviour
enum Direction {
    Up = 1,
    Down,
    Left,
    Right= 'Right'
}

// E.X is constant:
enum E {
    X
}

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}

