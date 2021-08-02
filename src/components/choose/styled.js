import styled from "styled-components";

import london from '../../assets/imgs/London.svg'
import sydney from '../../assets/imgs/Sydney.svg'
import newYork from '../../assets/imgs/newYork.svg'
import australia from '../../assets/imgs/australia.svg'
import tokyo from '../../assets/imgs/tokyo.svg'
export const ChooseStyle = styled.section`
    margin-top: 119px;
    p{
        margin: 10px 0 50px 0;
    }
`

export const CitysGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'london NY australia'
                        'sydney NY tokyo';

    height: 49vh;

    width: 69%;
    margin: 0 auto;
    div{
        width: 91%;
        display: flex;
        justify-content: flex-end;

        padding: 10px 10px;

        margin: 0 auto;
    }
    .one{
        grid-area: london;

        background: url(${london}) no-repeat;
        background-size: contain;     
    }
    .two{
        grid-area: sydney;
        background: url(${sydney}) no-repeat;

        background-size: contain;
    }
    .three{
        grid-area: australia;
        background: url(${australia}) no-repeat;

        background-size: contain;
    }
    .four{
        grid-area: NY;
        background: url(${newYork}) no-repeat;

        background-size: cover;

        border-radius: 5px;

        height: 97.5%;
    }
    .five{
        grid-area: tokyo;
        background: url(${tokyo}) no-repeat;

        background-size: contain;
    }
    article{
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(15px);
        opacity: 0.8;

        width: 35%;
        height: 54px;

        border-radius: 2px;

        padding: 11px 15px 9px 15px;
        h1{
            font-size: 14px;
            color: rgba(28, 28, 28, 1);
        }
        p{
            margin-top: 3px;
            font-size: 12px;
            color: rgba(0, 0, 0, 1);
        }
    }
`