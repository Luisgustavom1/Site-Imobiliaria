import styled from 'styled-components';

export const AboutStyle = styled.section`
    display: flex;
    text-align: start;
    justify-content: space-between;
    align-items: center;

    width: 69%;
    margin: 119px auto 0 auto;
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
        display: flex;
        width: 17%;
        content: '';
        background: #3454FB95;
        height: 4px;
        margin-bottom: 13px;
    }
`


// background: rgba(52, 84, 251, 1);
// rgba(28, 49, 163, 0,76)
// border: 4px solid;
// border-image-source: linear-gradient(90deg, #3454FB 0%, rgba(28, 49, 163, 0.76) 100%);

