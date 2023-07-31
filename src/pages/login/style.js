import styled from "styled-components";
import theme from "../../theme/theme";

export const Form = styled.form`
       
    display:flex;
    flex-direction: column;

    div{
         position:relative;
    }  
        
`
export const Button = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        button{
        display: flex;
        align-items: center;
        padding: 16px 107px;
        gap: 9px;
        border-radius: 10px;  
        font-family: Epilogue;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -1.56px;
        cursor: pointer;

        }
        
        .loginAccount{
            background-color: ${theme.color.blue600};
            color: ${theme.color.gray150};
        }
        .createAccount{
            background-color: ${theme.color.gray150};
            color: ${theme.color.blue600};
            border: 1px solid ${theme.color.blue600} !important;
            padding: 15px 50px;
            font-size:25px;
        }
`
export const Forgot = styled.div`
    display: flex;
    flex-direction: row;
    align-items: initial;
    justify-content: end;
    gap: 4px;
    margin-top:15px;
    
    a{
        color: ${theme.color.orange700} !important;
        text-align: right;
        font-family: Epilogue;
        font-size: 11px !important;
        font-style: normal;
        font-weight: 400;
        letter-spacing: -0.715px;
        padding-top:1px;
    }
`