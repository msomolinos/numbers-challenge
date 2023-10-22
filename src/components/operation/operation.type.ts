import {DigitType} from "../digit/digit.type.ts";

export const SUM = '+'
export const SUB = '-'
export const PROD = 'x'
export const DIV = '/'

export const UNKNOWN = '?'

export class OperationType {
    digit1: DigitType = new DigitType(0)
    digit2: DigitType = new DigitType(0)
    symbol: string = ''
    show: boolean = false
}

export const calculate = (operation) => {
    switch (operation.symbol) {
        case SUM:
            return operation.digit1.value + operation.digit2.value
        case SUB:
            return operation.digit1.value - operation.digit2.value
        case PROD:
            return operation.digit1.value * operation.digit2.value
        case DIV:
            return operation.digit1.value / operation.digit2.value
        default:
            return 0
    }
}
export const isComplete = (operation) => {
    return operation && operation.digit1 && operation.digit2 &&
        operation.digit1.value !== 0 && operation.digit2.value !== 0 && operation.symbol !== ''
}

export const isNullOrBlank = (operation) => {
    return !operation || (!operation.digit1 && !operation.digit2 && !operation.symbol && !operation.show)
}

export const isValidOperation = (operation) => {
    if (!isComplete(operation)) return false

    if (operation.digit1.id === operation.digit2.id) return false

    const result = calculate(operation)
    return result > 0 && parseInt(result, 10) === result
}

export const collectStatement = (operation) => {
    return `${operation.digit1.value} ${operation.symbol} ${operation.digit2.value} = ${calculate(operation)}`
}