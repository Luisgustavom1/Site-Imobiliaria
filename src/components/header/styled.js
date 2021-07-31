import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    margin-top: 15px;
    nav{
        display: flex;
        justify-content: space-between;
        width: 40%;
        font-size: 18px;
        font-weight: 400;
        p{
            opacity: 60%;
            &:hover{
                opacity: 1;
            }
        }
    }
    button{
        font-weight: 600;
        font-size: 20px;
        color: #3454FB;
        background-color: #FFFFFF;
        border-radius: 5px;
        padding: 15px 30px;
    }
`