import styled from 'styled-components'
import { MainDelimit } from '../../styles/main'

export const TestimonialStyle = styled.div`
    background: rgba(52, 84, 251, 0.05);

    position: absolute;
    right: 0;

    width: 100vw;

    margin-top: 120px;

    div{
        width: 53%;
        margin: 86px auto 20px auto;
        h1{
            font-size: 43.8px;
        }
        span{
            background-color: #3454FB;

            width: 25%;
            height: 1.9px;

            display: flex;

            margin: 10px auto 29px auto;
        }
        p{  
            margin: 30px;
            font-size: 16px;
        }
    }
`

export const ClientsStyle = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .left{
        left: 23%;
    }
    article{
        display: flex;
        margin: 0 auto;

        position: relative;
        right: 25%;
        z-index: 999;
    }
    .right{
        right: 17%;
    }
`
export const Line = styled.span`
    background-color: rgba(52, 84, 251, .2);

    width: 69%;

    height: 1.9px;

    display: flex;
    position: relative;
    left: 25%;

    z-index: 1;
`

export const Circle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    border-radius: 50%;

    color: white;
    background: rgba(52, 84, 251, 1);

    width: 40px;
    height: 40px;

    font-size: 30px;
    font-weight: 300;
`

