import Digit from './digit.tsx'

const Candidates = ({candidates, operation, setOperation}) => {
    return (
        <section className='candidates'>
            <h3>Candidates</h3>
            <div className='grid'>
                {
                    candidates.map((digit: number) => <Digit
                        number={digit}
                        operation={operation}
                        setOperation={setOperation}/>)
                }
            </div>
        </section>
    )
}

export default Candidates