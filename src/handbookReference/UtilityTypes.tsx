// ~ Partial
interface Todo {
    title: string;
    description: string;
}

type TypeWithOptionalProps = Partial<Todo>

// ~ Readonly
const todo:  Readonly<Todo> = {
    title: 'Hello',
    description: 'description'
}
todo.title = ''

// ~ Record
// ? Record<one prop from obj, value>
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact'

const nav1: Record<Page, PageInfo> = {
    'home': {title: 'Home'}
}

const nav2: Record<Page, PageInfo> = {
    'home': {title: 'Home'}
}

// ~ Pick
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">

const todo2: TodoPreview = {
    title: "Clean room",
    completed: false,
};

// ~ Omit
type TodoPreview2 = Omit<Todo, 'description' | 'title'>

const todo3: TodoPreview2 = {
    completed: false
}

// ~ Exclude
type t0 = Exclude<"a" | "b" | "c", "c"> // "a" | "b"
type t1 = Exclude<"a" | "b" | (() => void), Function> // "a" | "b"

// ~ Extract
type t2 = Extract<"a" | "b" | "c", "a" | "f"> // "a"
type t3 = Extract<"a" | "b" | (() => void), Function> // () => void

// ~ NonNullable
type t4 = NonNullable<string | number | undefined>;

// ~ Parameters
declare function f1(arg: { a: number; b: string }): void;
type t5 = Parameters<typeof f1> // [a: number; b: string]

// ~ Constructor Parameters (construct a tuple or array type from the types of constructor)
type t6 = ConstructorParameters<ErrorConstructor> // [string]

// ~ ReturnType
type t7 = ReturnType<typeof setTimeout>

// ~ InstanceType<Type>
class MyClass {
    x = 0;
    y = 0;
}

type t8 = InstanceType<typeof MyClass>

// ~ Required
interface Props {
    a?: number;
    b?: string;
}

const obj: Required<Props> = {}

// ~ ThisParameterType
function toHex(this: Number) {
    return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
}

// ~ OmitThisParameter<Type>