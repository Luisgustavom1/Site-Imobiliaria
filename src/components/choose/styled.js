import styled from "styled-components";

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
    &:nth-child(1){
        grid-area: london;
    }
    &:nth-child(2){
        grid-area: sydney;
    }
    &:nth-child(3){
        grid-area: australia;
    }
    &:nth-child(4){
        grid-area: NY;
    }
    &:nth-child(5){
        grid-area: tokyo;
    }
`