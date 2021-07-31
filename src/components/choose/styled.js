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
    .london{
        grid-area: london;
        background-image
    }
    .sydney{
        grid-area: sydney;
    }
    .australia{
        grid-area: australia;
    }
    .NY{
        grid-area: NY;
    }
    .tokyo{
        grid-area: tokyo;
    }
`