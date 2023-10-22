import {Statement} from "../../utils/statement.ts";

const Board = ({statements}) => {
    return (
        <div className='statements'>
            {
                statements.length > 0 && (
                    <>
                        <h3>Operations board</h3>
                        <dl>
                            {
                                statements.map((statement: Statement) => <dt key={statement.id}>{statement.value}</dt>)
                            }
                        </dl>
                    </>
                )
            }
        </div>
    )
}

export default Board