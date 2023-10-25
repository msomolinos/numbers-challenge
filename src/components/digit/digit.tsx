import {isNullOrBlank, OperationType} from "../operation/operation.type.ts";
import {useEffect, useState} from "react";
import './digit.css'
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/state.ts";
import {createBestOptionCandidateNewAction, createOperationUpdateAction} from "./action.ts";

const Digit = ({ digit }) => {

    const operation = useSelector((state: State) => state.operation)
    const bestOptionCandidate = useSelector((state: State) => state.bestOptionCandidate)

    const dispatch = useDispatch()

    const [digitClassName, setDigitClassName] = useState('digit-basic')

    useEffect(() => {
        if (bestOptionCandidate === digit) {
            setDigitClassName('digit-best-option')
        } else if (operation.digit1 === digit || operation.digit2 === digit) {
            setDigitClassName('digit-operation')
        } else {
            setDigitClassName('digit-basic')
        }
    }, [operation, bestOptionCandidate]);

    const fetchDigit = (digit) => {
        if (isNullOrBlank(operation)) {
            dispatch(createBestOptionCandidateNewAction(digit))
            setDigitClassName('digit-best-option')
        } else {
            if (!operation.digit1 || (operation.digit2 && operation.digit2 === digit)) {
                dispatch(createOperationUpdateAction({
                    ...operation,
                    digit1: digit,
                } as OperationType))
            } else {
                dispatch(createOperationUpdateAction({
                    ...operation,
                    digit2: digit,
                } as OperationType))
            }
        }

    }

    return (
        <span
            key={digit.id}
            className={digitClassName}
            onClick={() => fetchDigit(digit)}>
            {digit.value}
        </span>
    )
}

export default Digit