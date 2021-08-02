import styled from "styled-components";

export const OurFeatureStyle = styled.div`
    padding-top: 110px;
    width: 69%;
    margin: 0 auto;
    h1{
        margin-bottom: 23px;
    }
    p{
        margin-bottom: 59px;
    }
`

export const HotelsCardsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    div{
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        width: 29%;
        height: 46vh;
        border-radius: 5px;
        > img{
            width: 100%;
        }
        section{
            padding: 34px 58px 23px 27px;
            h2{
                font-size: 21px;
                font-weight: 500;
                margin-bottom: 18px;
            }
            p{
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 18px;
            }
            span{
                display: flex;
                align-items: center;
                justify-content: space-between;

                p{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 5px;
                }
            }
        }
    }
`