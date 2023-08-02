import styled from "styled-components";
import theme from "../../../theme/theme";

export const Popup = styled.div`

   width:100%;
   position: fixed;
   z-index: 9999;
   background-color: rgba(0, 0, 0, 0.8);
   height: 100vh;
   
    main{
    width: 660px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:white;
    padding:50px;
    border-radius:8px;
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);

    @media (max-width:767px){
        padding:24px;
    }
    }
   

    @media(max-width:767px){
        width: 90%;
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