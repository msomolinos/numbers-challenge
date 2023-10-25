import {
    calculate,
    collectStatement,
    isValidOperation,
} from "../operation/operation.type.ts";
import Operation from "../operation/operation.tsx";
import './builder.css'
import {useDispatch, useSelector} from "react-redux";
import {createCandidatesDeleteAction, createCandidatesNewAction, createStatementsNewAction} from "./action.ts";
import {createOperationInitAction} from "../challenge/action.ts";
import {State} from "../../redux/state.ts";

const Builder = () => {

    const operation = useSelector((state: State) => state.operation)
    const dispatch = useDispatch()

    const submitNewCandidate = () => {
        dispatch(createStatementsNewAction(collectStatement(operation)))
        const result = calculate(operation);
        dispatch(createCandidatesDeleteAction(operation.digit1))
        dispatch(createCandidatesDeleteAction(operation.digit2))
        dispatch(createCandidatesNewAction(result))
        dispatch(createOperationInitAction())
    }

    const cancelCandidate = () => {
        dispatch(createOperationInitAction())
    }

    return (
        <div className='builder'>
            <div className={(operation.show) ? 'show' : 'hidden'}>
                <Operation />
            </div>

            <div className='actions'>
                <button onClick={submitNewCandidate} hidden={!isValidOperation(operation)}>ok</button>
                <button onClick={cancelCandidate} hidden={!operation.show}>cancel</button>
            </div>

        </div>
    )
}

export default Builder