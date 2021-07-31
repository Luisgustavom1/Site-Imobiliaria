import styled from 'styled-components';

export const AboutStyle = styled.section`
    display: flex;
    margin-top: 119px;
    text-align: start;
    justify-content: space-between;
    align-items: center;
    aside{
        width: 44%;
        h1{
            margin-bottom: 25px;
        }
        p{
            font-weight: 400;
            margin-bottom: 35px;
        }
        button{
            background-color: rgba(52, 84, 251, 1);
            color: #ffffff;
            font-size: 16px;
            font-weight: 500;
            border-radius: 5px;
            width: 37%;
            height: 57px;
        }
    }
    span{
        width: 15%;
        &:after{
            content: '';
            border: 4px solid #3454FB95;
        }
    }
`


// background: rgba(52, 84, 251, 1);
// rgba(28, 49, 163, 0,76)
// border: 4px solid;
// border-image-source: linear-gradient(90deg, #3454FB 0%, rgba(28, 49, 163, 0.76) 100%);

