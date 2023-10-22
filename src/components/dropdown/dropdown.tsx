import {DIV, PROD, SUB, SUM, UNKNOWN} from "../operation/operation.type.ts";
import './dropdown.css'

const Dropdown = ({className, symbol, setSymbol}) => {

    return (
        <div className={"dropdown"}>
            <span className={`dropbtn ${className}`}>{symbol ?? UNKNOWN}</span>
            <div className="dropdown-content">
                <a href='#' onClick={() => setSymbol(SUM)}>{SUM}</a>
                <a href='#' onClick={() => setSymbol(SUB)}>{SUB}</a>
                <a href='#' onClick={() => setSymbol(PROD)}>{PROD}</a>
                <a href='#' onClick={() => setSymbol(DIV)}>{DIV}</a>
            </div>
        </div>
    );
}

export default Dropdown;