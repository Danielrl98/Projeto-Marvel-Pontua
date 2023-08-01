import styled from "styled-components"
import theme from "../theme/theme"

export const Modal = styled.div`
    display: flex;
    flex-direction: row;
    gap:140px;

    @media(max-width:767px){
        flex-direction: row-reverse;
        flex-wrap: wrap;
        gap:0px;
        .build{
        display:none;
    }
    }
    section{
    background-color:${theme.color.white};
    border-radius: 28px;
    padding: 49px 36px 44px 36px;
    width: 380px;
    
    @media(max-width:767px){
        width: 100%;
        padding: 49px 12px 44px 12px;
        
    }
    
    h1{
        color: ${theme.color.blue600};
        font-family: ${theme.fonts.epilogue};
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -2.34px;
        padding-bottom:16px;

        @media(max-width:767px){
        font-size: 30px;
        }
    }
    strong{
        color: ${theme.color.orange500};
        font-family: ${theme.fonts.epilogue};
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -2.34px;
        @media(max-width:767px){
        font-size: 30px;
        }
    }
    p{
        color: ${theme.color.gray500};
        font-family: ${theme.fonts.epilogue};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 127%; 
        letter-spacing: -1.04px;    
        padding-bottom:6px;
    }
    }
    
`