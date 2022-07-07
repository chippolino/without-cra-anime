import {NavLink, Outlet} from 'react-router-dom'
import {getInvoices} from '../data'
import styled from 'styled-components'
import {Btn} from '../ui/Button/Button'

interface Btnd {
    bg: string
}

interface Container {
    width: string,
    hasPadding: boolean
}

const StyledButton = styled.button<Btnd>`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  background-color: ${props => props.bg === "black" ? "black" : "blue"}
`;

const StyledContainer = styled.section.attrs((props: Container) => ({
    width: props.width || "100%",
    hasPadding: props.hasPadding || false,
}))<Container>`
  --container-padding: 20px;
  width: ${(props) => props.width}; // Falls back to 100%
  padding: ${(props) =>
    (props.hasPadding && "var(--container-padding)") || "none"};
`;

export function Invoices() {
    const invoices = getInvoices()
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                {invoices.map(invoice => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : ""
                            };
                        }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
            <StyledButton bg='black'>Black</StyledButton>
            <StyledContainer hasPadding>Test</StyledContainer>
            <Btn text='Hello world'/>
        </div>
    );
}