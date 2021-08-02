import styled from 'styled-components'

export const TestimonialStyle = styled.div`
    background: rgba(52, 84, 251, 0.05);
    width: 100vw;
    margin-top: 120px;

    position: relative;
    .circleMaior{
        width: 39%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        margin: 0;

        border-radius: 50%;
        border: 1px solid rgba(52, 84, 251, .1);
    }
    div{
        width: 53%;
        margin: 0 auto 0 auto;
        h1{
            font-size: 43.8px;
            padding-top: 85px;
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
    
    aside{
        position: absolute;

        width: 48px;
        height: 48px;

        padding: 2px;

        border: 2px solid #3454FB;
        border-radius: 50%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left{
        left: 20%;
    }
    article{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 0 auto;

        position: relative;
        right: 25%;
        z-index: 999;
        
        div{
            margin: 0;
        }
        .person2{
            position: relative;
            right: -4.5%;
        }
        .person3{
            position: relative;
            right: 2.5%;
        }
    }
    .right{
        right: 20%;
    }
`
export const Line = styled.span`
    background-color: rgba(52, 84, 251, .2);

    width: 69%;

    height: 1.9px;

    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    z-index: 1;
`

export const Circle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    background: rgba(52, 84, 251, 1);

    width: 100%;
    height: 100%;

    border-radius: 50%;
`

