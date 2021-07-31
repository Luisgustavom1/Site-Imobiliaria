import styled from 'styled-components'

export const CardListStyle = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
    
    border-radius: 15px;
    width: 49%;

    margin: 166px auto;
    padding: 25px;

    display: flex;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border: 1px solid rgba(255, 255, 255, .3);
        border-radius: 10px;

        height: 70px;
        width: 22%;

        font-weight: 500;
        label{
            font-size: 13px;
            letter-spacing: 3px;

            color: rgba(255, 255, 255, 1);

            margin-bottom: 7px;
        }
        select{
            font-size: 15px;

            background-color: transparent;
            color: #FFFFFF;

            opacity: .3;

            border: none;
        }
    }
    button{
        background: rgba(52, 84, 251, 1);

        border-radius: 10px;

        font-size: 18px;

        color: #FFFFFF;

        width: 23%;
        &:hover{
            background: rgba(52, 84, 251, .8);
        }
    }
;
`
