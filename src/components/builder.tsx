import {
    calculate,
    collectStatement,
    countAppearances,
    DIV,
    isValidOperation,
    Operation,
    PROD,
    SUB,
    SUM
} from "./operation.ts";
const Builder = ({candidates, setCandidates, operation, setOperation, statements, setStatements, setBestOption}) => {

    const digit1 = operation ? operation.digit1 : ''
    const digit2 = operation ? operation.digit2 : ''
    const symbol = operation ? operation.symbol : ''
    const result = operation && isValidOperation(candidates, operation) ? String(calculate(operation)) : ''

    const closeModal = () => {
        const modal = document.getElementsByClassName('modal')[0]
        modal.classList.remove('show')
        modal.classList.add('hidden')
    }

    const submitNewCandidate = () => {
        closeModal();
        setStatements(statements.concat([collectStatement(operation)]))
        const result = calculate(operation);
        const countDigit1 = countAppearances(candidates, operation.digit1);
        const countDigit2 = countAppearances(candidates, operation.digit2);
        const newCandidates = candidates.filter((number) => number !== operation.digit1 && number !== operation.digit2)
            .concat([result])
            .concat(countDigit1 === 1 ? [] : Array(countDigit1).fill(operation.digit1))
            .concat(countDigit2 === 1 ? [] : Array(countDigit2).fill(operation.digit2))
        setCandidates(newCandidates)
    }

    const submitBestOption = () => {
        closeModal();
        setStatements(statements.concat([collectStatement(operation)]))
        const result = calculate(operation);
        const newCandidates = candidates.filter((number) => number !== operation.digit1 && number !== operation.digit2)
            .concat([result])
        setCandidates(newCandidates)
        setBestOption(result)
    }

    const setSymbol = (symbol = "") => {

        const currentOperation = operation ?? {} as Operation
        setOperation({
            ...currentOperation,
            symbol: symbol,
        })

    }

    return (
        <div className='operation'>
            <div className='modal hidden'>
                <p>
                    <span id='digit1'>{digit1}</span>
                    <span id='symbol'>{symbol}</span>
                    <span id='digit2'>{digit2}</span>
                    <span id='equal' hidden={!isValidOperation(candidates, operation)}>=</span>
                    <span id='result'>{result}</span>
                    <button onClick={submitNewCandidate} hidden={!isValidOperation(candidates, operation)}>ok</button>
                    <button onClick={submitBestOption} hidden={!isValidOperation(candidates, operation)}>my best option</button>
                </p>
                <button onClick={() => setSymbol(SUM)}>{SUM}</button>
                <button onClick={() => setSymbol(SUB)}>{SUB}</button>
                <button onClick={() => setSymbol(PROD)}>{PROD}</button>
                <button onClick={() => setSymbol(DIV)}>{DIV}</button>
            </div>

        </div>
    )
}

export default Builder