import Dropdown from "../dropdown/dropdown.tsx";
import './operation.css'
import {calculate, isValidOperation, OperationType} from "./operation.type.ts";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/state.ts";
import {createOperationUpdateAction} from "../digit/action.ts";

const Operation = () => {

    const operation = useSelector((state: State) => state.operation)

    const dispatch = useDispatch()

    const [operationSpanClassName, setOperationSpanClassName] = useState('operation-span-basic')

    useEffect(() => {
        if (operation && isValidOperation(operation)) {
            setOperationSpanClassName('operation-span-valid')
        } else if (operation && operation.digit1 && operation.digit2 && !isValidOperation(operation)) {
            setOperationSpanClassName('operation-span-error')
        } else {
            setOperationSpanClassName('operation-span-basic')
        }
    }, [operation]);



    const setSymbol = (symbol = "") => {
        dispatch(createOperationUpdateAction({
            ...operation,
            symbol: symbol
        } as OperationType))
    }

    return (
        <div className='operation'>
            <span
                id='digit1'
                className={operationSpanClassName}>
                {operation.digit1 ? operation.digit1.value: ''}
            </span>
            <Dropdown
                className={operationSpanClassName}
                symbol={operation.symbol}
                setSymbol={setSymbol}
            />
            <span
                id='digit2'
                className={operationSpanClassName}>
                {operation.digit2 ? operation.digit2.value : ''}
            </span>
            <span
                id='equal'
                className={operationSpanClassName}>
                =
            </span>
            <span
                id='result'
                className={operationSpanClassName}>
                {operation && isValidOperation(operation) ? String(calculate(operation)) : '' }
            </span>
        </div>
    )
}

export default Operation