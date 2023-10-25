import Board from "../board/board.tsx";
import {useSelector} from "react-redux";
import {State} from "../../redux/state.ts";

const Results = () => {

    const winner = useSelector((state: State) => state.winner)
    const bestOption = useSelector((state: State) => state.bestOption)
    const statements = useSelector((state: State) => state.statements)

    const title = (winner) ? `Here is a winner` : `Good effort this is your very best result`
    const body = (winner) ? `You finally resolve the challenge` : `Your best performance is ${bestOption}. Give yourself a new chance to resolve the challenge`
    return (
        <>
            <section>
                <h3>{title}</h3>
                <p>{body}</p>
            </section>
            <Board statements={statements}/>
        </>
    )
}

export default Results