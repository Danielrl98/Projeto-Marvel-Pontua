import styled from "styled-components";
import theme from "../../theme/theme";

export const Nav = styled.div`

background-color: ${theme.color.divider};

`
export const SubNav = styled.div`
    position: fixed;
    left:0;
    top:0;
    width:256px;
    box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
    height:100vh;

    @media(max-width:767px){
        position: relative;  
        height:auto;
        width:100%;
    }
        
`
export const DivLogo = styled.div`
   
    padding-top: 20px;
    padding-left: 26.22px ;
    padding: 14.72px;
    border-bottom: 1px solid ${theme.color.divider};

    img{
    width: 104.775px;
    height: 26.281px;
    }
    
`
export const Opcoes = styled.div`
    padding-top: 10px;
    padding-left: 16px;
    padding-bottom: 22px;
    padding-right: 20px;
    border-bottom: 1px solid ${theme.color.divider};
    @media(max-width:767px){
        padding-bottom: 0;
    }
    
    a{
        color: ${theme.color.black};
        font-family: ${theme.fonts.epilogue};
        font-size: 13px ;
        font-style: normal;
        font-weight: 500 ;
        line-height: normal;
        letter-spacing: -0.39px;
        display:flex;
        gap:14px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 6px;
        padding: 8px 7px;
        border-radius: 10px;
        width: 100px;
        cursor:pointer;
    }
    .active{
        color:#F21A05;
        background: ${theme.color.grayBackground};
        
    }
    li{
        list-style: none;
        margin-bottom: 4px;
        display: flex;
       
    }
  

`
export const Logout = styled.div`
    padding-top: 28px;
    padding-left: 23px;
    padding-right: 20px;

    @media(max-width:767px){
        padding-top: 0;
        padding-left: 16px;
        padding-bottom: 16px;
    }
    li{
        list-style: none;
    }
    a{
        color: ${theme.color.black};
        font-family: ${theme.fonts.epilogue};
        font-size: 13px ;
        font-style: normal;
        font-weight: 500 ;
        line-height: normal;
        letter-spacing: -0.39px;
    }
    li{
        padding: 8px 7px;
        margin-bottom: 4px;
        border-radius: 10px;
        display: flex;
        gap: 14px;
    }
    li:active{
        background: ${theme.color.grayBackground};
    }
    .logout{
        cursor:pointer;
        color: ${theme.color.black};
        font-family: ${theme.fonts.epilogue};
        font-size: 13px ;
        font-style: normal;
        font-weight: 500 ;
        line-height: normal;
        letter-spacing: -0.39px;
    }
`