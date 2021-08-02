import styled from "styled-components";
import BgFooter from '../../assets/imgs/BgFooter.svg'

export const FooterStyle = styled.footer`
    background-image:
    linear-gradient(
        #0E0F17E5, 
        #0E0F17E5
            ),
            url(${BgFooter}); 
    background-repeat: no-repeat;
    background-size: 100vw auto;

    width: 100vw;

    margin-top: 115.25px;

    footer{
            background-color: #010413;

            width: 100vw;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 25px 245px;

            font-size: 14px;
            color: rgba(255, 255, 255, .7);
        }
`

export const SectionFooter = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 86px 245px;

    P{
        font-size: 14px;
        margin-bottom: 25px;

        color: rgba(255, 255, 255, .7)
    }
    div{
        width: 21%;
        h1{
        font-size: 22.5px;
        margin-bottom: 30px;
        }
    }
`

export const AsideFooter = styled.aside`
    width: 21%;
    margin-top: -39px;
    p{
        margin-bottom: 30px;
    }
    span{
        display: flex;
        gap: 24px;
    }
`