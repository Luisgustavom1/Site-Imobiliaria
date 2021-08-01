import styled from 'styled-components'

export const SaleStyle = styled.div`
    width: 100%;
    color: rgba(255, 255, 255, 1);
    background: linear-gradient(94.57deg, rgba(29, 54, 181, 0.87) 0.36%, #572C8E 101.89%);
    border-radius: 5px;
    padding: 40px 0 60px 0%;
    margin-top: 185px;
    h1{
        font-size: 43.8px;
    }
    p{
        color: rgba(255, 255, 255, .8);
        font-size: 18px;
        margin: 10px 0 45px 0;
    }
    label{
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 1;
        height: 1;
    }
    input{
        width: 26%;
        height: 50px;

        margin-right: 22px;
        padding: 15px 77px 14px 49px;

        border-radius: 5px;
    }
    button{
        background: rgba(52, 84, 251, 1);

        border-radius: 5px;

        padding: 17px 30px;

        color: #ffffff
    }
;
`