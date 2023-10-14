const Board = ({statements}) => {
    return (
        <section>
            <h3>Operations board</h3>
            {
                statements && (
                    <dl>
                        {
                            statements.map((statement: string) => <dt>{statement}</dt>)
                        }
                    </dl>
                )
            }
        </section>
    )
}

export default Board