import {Statement} from "../../utils/statement.ts";
import {useSelector} from "react-redux";
import {State} from "../../redux/state.ts";

const Board = () => {

    const statements = useSelector((state: State) => state.statements)
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