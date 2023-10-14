const Digit = ({number, operation, setOperation}) => {

    const fetchDigit = () => {
        if (!operation) return

        const digit1 = operation.digit1 || 0
        const digit2 = operation.digit2 || 0
        if (digit1 === 0 || digit2 === number) {
            setOperation({
                ...operation,
                digit1: number,
            })
        } else {
            setOperation({
                ...operation,
                digit2: number,
            })
        }
    }

    return (
        <span onClick={fetchDigit}>{number}</span>
    )
}

export default Digit