import {
    calculate,
    collectStatement,
    isValidOperation,
    OperationType,
} from "../operation/operation.type.ts";
import {Statement} from "../../utils/statement.ts";
import {DigitType} from "../digit/digit.type.ts";
import Operation from "../operation/operation.tsx";
import './builder.css'

const Builder = ({candidates, setCandidates, operation, setOperation, statements, setStatements}) => {

    const submitNewCandidate = () => {
        setStatements(statements.concat([new Statement(collectStatement(operation))]))
        const result = calculate(operation);
        const newCandidates = candidates.filter((digit) => digit !== operation.digit1 && digit !== operation.digit2)
            .concat([new DigitType(result)])
        setCandidates(newCandidates)
        setOperation({ show: false })
    }

    const cancelCandidate = () => {
        setOperation({ show: false })
    }

    const setSymbol = (symbol = "") => {

        const currentOperation = operation ?? {} as OperationType
        setOperation({
            ...currentOperation,
            symbol: symbol,
        })

    }

    return (
        <div className='builder'>
            <div className={(operation.show) ? 'show' : 'hidden'}>
                <Operation
                    operation={operation}
                    setSymbol={setSymbol}
                />
            </div>

            <div className='actions'>
                <button onClick={submitNewCandidate} hidden={!isValidOperation(operation)}>ok</button>
                <button onClick={cancelCandidate} hidden={!operation.show}>cancel</button>
            </div>

        </div>
    )
}

export default Builder