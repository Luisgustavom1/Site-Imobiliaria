import { createGlobalStyle } from "styled-components";
import houseImg from '../assets/imgs/house.png'
 
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
    body{
        background-image: url(${houseImg});
        background-size: cover;
        background-repeat: no-repeat;
    }
    button, input, text-area{
        outline: none;
        border: none;
    }
    a, ul, li{
        text-decoration: none;
    }
`

export default GlobalStyle