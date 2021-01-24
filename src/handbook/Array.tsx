// array from type
type TMonths = 'Sep' | 'Oct' | 'Nov' | 'Dec'

const months1: TMonths[] = ['Sep', 'Nov'] // ok
const months2: Array<TMonths> = ['Sep', 'Nov'] // ok
const months3: Array<string> = ['Sep', 'Nov'] // ok


const obj1 = {
    'a': 1,
    'b': 2,
    'c': '4'
}

// @ts-ignore
const obj1Values = Object.values(obj1)

type TObjectType1 = typeof obj1

type TObjectKeys1 = keyof typeof obj1

type TObjectValues1 = typeof obj1[TObjectKeys1]

// array of obj keys
const array1: Array<TObjectKeys1> = ['a', 'b', 'c']

// array of objs from obj
const array2: Array<TObjectType1> = [{'a': 1, 'b': 2, 'c': ''}, {'a': 20, 'b': 2, 'c': ''}]

// array of types of values from obj
const array3: Array<TObjectValues1> = [1, 2, '1']

// array of array values
const array4: Array<typeof obj1Values> = []