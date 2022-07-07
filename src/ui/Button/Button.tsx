import styled from 'styled-components'

interface Btns {
    text?: string;
    size?: string
    view?: string;
    disabled?: boolean;
}

const sizes = {
    xs: '9px 16px',
    s: '9px',
    m: '10px 18px',
    l: '12px',
    xl: '16px'
}

const Button = styled.button<Btns>`
  display: inline-block;
  color: var(--main-text);
  border: none;
  padding: 10px 18px;
  border-radius: 55px;
  text-align: center;
`


export const Btn = (props: any) => (
    <Button {...props}>{props.text}</Button>
)
