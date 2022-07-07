import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
        </>
    )
}