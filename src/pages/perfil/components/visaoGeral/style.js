import styled from "styled-components";
import theme from "../../../../theme/theme";

export const Card = styled.div`

    width: 100%;
    border-radius: 15px;
    background: ${theme.color.white};
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
    padding: 42px 35px 72px 34px;

    .flex{
        display:flex;
        gap: 31px;
        @media(max-width:767px){
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }
    .img{
        width: 90px;
        height: 90px;       
        border-radius:100px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .description {
        display:flex;
        flex-direction: column;
        gap: 2px;
       
        h2{
            color: ${theme.color.blue600};
            font-family: ${theme.fonts.epilogue};
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.72px;
        }
        p{
            color: #717171;
            font-family: ${theme.fonts.epilogue};
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 153.5%;
            letter-spacing: -0.48px;        
        }
    }
    

`