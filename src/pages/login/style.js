import styled from "styled-components";
import theme from "../../theme/theme";

export const Container = styled.div`
    max-width: 1600px;
    height: 100vh;
    padding-top: 49px;
    padding-left: 106px;
    padding-right: 68px;
    background-color:#00113d;

    @media(max-width:767px){

        padding:12px;
    }
    

`
export const Header = styled.header`
    padding-bottom: 95px;

`
export const Flex = styled.div`
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
    
`
export const GridForm  = styled.div`
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
    
`
export const Form = styled.form`
       
        display:flex;
        flex-direction: column;

        div{
            position:relative;
        }
        .img{
            position: absolute;
            right:15px;
            top:23px;
        }
        input{
            width: 100%;
            display: inline-flex;
            padding: 20px 15px;
            align-items: center;
            gap: 77px;  
            border-radius: 10px;
            border: 0.7px solid ${theme.color.blue500};
            background: ${theme.color.white};
            margin-bottom:11px;
            color: ${theme.color.blue500};
            font-family: Epilogue;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -1.04px;
            
            &:first-child{
                margin-bottom:23px;
            }
            &::placeholder{
                color: ${theme.color.gray400};
                font-family: ${theme.fonts.epilogue};
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: -0.91px;
            }
        }
        .pass{
            cursor: pointer;
            background-color: white;
            z-index: 10;
            padding-left: 5px;
        }
        
`
export const Button = styled.div`
        display: flex;
        align-items: center;
        padding: 16px 107px;
        gap: 9px;
        border-radius: 10px;
        background-color: ${theme.color.blue600};
        color: ${theme.color.gray150};
        font-family: Epilogue;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -1.56px;
            cursor: pointer;
`
