import styled from "styled-components";
import theme from "../../theme/theme";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 256px 1fr ;
    
    section{
        padding:24px 34px;
        
    }
    @media(max-width:767px){
        display:flex;
        flex-direction: column;
    }
`
export const Buttons = styled.div`

    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:24px;
    border-bottom: 1px solid ${theme.color.divider};
    margin-bottom: 29px;
    li{
        list-style: none;

    }
   
    button{
        color: ${theme.color.blue600};
        font-family: ${theme.fonts.epilogue};
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        background: none;
        border: none;
        padding-bottom: 20px;
        cursor: pointer;
    }
    
    .active{
        border-bottom: 1px solid ${theme.color.blue600};
    }
`
export const Header = styled.header`

    display:flex;
    flex-direction: row;
    gap: 5px;
    padding: 0 36px 23px 0;
    div{
        display:flex;
        align-items :  center;
    }
    h1{
        color: ${theme.color.blue600};
        font-family: ${theme.fonts.epilogue};
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.72px;
    }
    strong{
        color: ${theme.color.orange500};
        font-family: ${theme.fonts.epilogue};
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.72px;
    }
    p{
        color: ${theme.color.gray500};
        font-family: ${theme.fonts.epilogue};
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: -0.72px;

        @media(max-width:767px){
            font-size: 15px;
        }
    }
    

`
