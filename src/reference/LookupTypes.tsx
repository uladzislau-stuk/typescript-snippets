import React, {Component, FC, ReactChildren} from 'react'

const defaultProps = {
    countDefault: 0
}

type CounterState = {count: number}
// {} & {countDefault: 0}
type CounterProps = {} & typeof defaultProps

class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0
    }
}

// we can event import Counter and call props
type ConsumerState = {test: string}
type ConsumerProps = Counter['props'] & {
    children: ReactChildren
    oneMoreProps: 'test'
}

class Consumer extends Component<ConsumerProps, ConsumerState> {
    state: {
        test: ''
    }
    render() {
        return this.props.children;
    }
}

// typing without runtime code
// don't do import { ChangeEvent } from 'react'

export const handleChange = (
    e: import('react').ChangeEvent<HTMLInputElement>
) => {
    //.. do something
}


interface Interface1 {
    prop1: number;
}

interface Interface2 extends Interface1 {
    prop2: number;
}

type Int = Interface2


// define function component

type Props = {
    prop1?: string;
    prop2?: string;
}


// don't
function FComponent({
    prop1 = 'If prop 1 undefined',
    prop2 = 'If prop 1 undefined'
}: Props) {
    return null
}

// do
const FCComponent: FC<Props> = ({
    prop1 = 'Hello world',
    prop2 = 'Hello world'
 }) => {
    return null
}

/*
* Articles
*
*
* Read:
* https://davidea.st/articles/typescript-2-9-import-types
* */