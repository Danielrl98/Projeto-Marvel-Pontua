import styled from "styled-components";
import theme from "../theme/theme";

export const InputComponent = styled.div`

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
        font-family: ${theme.fonts.epilogue};
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
        .img{
            position: absolute;
            right:15px;
            top:19px;
            background-color: white;
            border-radius:200px;
            text-align: center;
            z-index: 10;
            padding: 3px;
           ;
        }
        
        .pass{
            cursor: pointer;
            
        }
       
`