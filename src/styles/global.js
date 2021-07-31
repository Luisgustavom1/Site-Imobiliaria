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
        background-repeat: no-repeat;
        /* background-image:  */
        /* linear-gradient(
            #292E4B00, 
            #292E4B10
            ),
            url(${houseImg}); */
        background-image: url(${houseImg});
        background-size: 100vw auto;
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