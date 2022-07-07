import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

export const Global = createGlobalStyle`
  ${normalize}
  
  :root {
    --main-color: #FED700;
    --main-darker: #FEBA0C;
    --main-lighter: #FFF7CC;
    
    --main-text: #1A1A1A;
    --main-second: #7B8E98;
    --main-outline:  #CFD8DC;
    --main-form: #ECEFF1;
    
    --white: #ffffff;
    --red: #F44336;
    --blue: #03A9F4;
    --green: #01A54E;
  }
  
  body {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 1.25;
    color: var(--main-text)
  }
`