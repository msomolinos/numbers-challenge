import Board from "./board.tsx";

const Results = ({winner, bestOption, statements}) => {
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