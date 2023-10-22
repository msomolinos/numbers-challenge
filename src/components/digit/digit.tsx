import {isNullOrBlank} from "../operation/operation.type.ts";
import {useEffect, useState} from "react";
import './digit.css'

const Digit = ({ digit, operation, setOperation, bestOptionCandidate, setBestOptionCandidate}) => {

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
            setBestOptionCandidate(digit)
            setDigitClassName('digit-best-option')
        } else {
            if (!operation.digit1 || (operation.digit2 && operation.digit2 === digit)) {
                setOperation({
                    ...operation,
                    digit1: digit,
                })
            } else {
                setOperation({
                    ...operation,
                    digit2: digit,
                })
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