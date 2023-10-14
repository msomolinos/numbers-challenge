
export const SUM = '+'
export const SUB = '-'
export const PROD = 'x'
export const DIV = '/'

export class Operation {
    digit1: number = 0
    digit2: number = 0
    symbol: string = ''
}

export const calculate = (operation) => {
    switch (operation.symbol) {
        case SUM:
            return operation.digit1 + operation.digit2
        case SUB:
            return operation.digit1 - operation.digit2
        case PROD:
            return operation.digit1 * operation.digit2
        case DIV:
            return operation.digit1 / operation.digit2
        default:
            return 0
    }
}
export const isComplete = (operation) => {
    return operation && operation.digit1 && operation.digit2 && operation.symbol &&
        operation.digit1 !== 0 && operation.digit2 !== 0 && operation.symbol !== ''
}

export const countAppearances = (list, item) => list.reduce((accum, current) => current === item ? accum++ : 0, 0)

export const isValidOperation = (candidates, operation) => {
    if (!isComplete(operation)) return false

    if (operation.digit1 === operation.digit2 && countAppearances(candidates, operation.digit1) >= 2) return false

    const result = calculate(operation)
    return result > 0 && parseInt(result, 10) === result
}

export const collectStatement = (operation) => {
    return `${operation.digit1} ${operation.symbol} ${operation.digit2} = ${calculate(operation)}`
}