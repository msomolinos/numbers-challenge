const Header = ({challenge}) => {
    return (
        <header className="tc pv4 pv5-ns">
            <h1 className="f5 f4-ns fw6 mid-gray">Numbers Challenge</h1>
            <p className="f6 gray fw2 ttu tracked">Build the path to get the number {challenge}</p>
        </header>
    )
}

export default Header