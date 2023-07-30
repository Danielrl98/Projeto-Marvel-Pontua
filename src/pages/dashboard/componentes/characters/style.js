import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const Grid = styled.ul`
    display:flex;
    flex-wrap: wrap;
    gap:10px;
    width:100%;
    padding:20px;
    
    a{
        list-style: none;
        display:flex;
        gap: 14px;
        border-radius: 15px;
        background: ${theme.color.gray100};
        box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
        padding: 14px 10px;
        height: 147px;
        flex: 1 0 auto;
        cursor: pointer;
    }
    aside{
        display:flex;
        flex-direction: column;
    }
    h2{
        width:180px;
        color: ${theme.color.black};
        font-family: ${theme.fonts.epilogue};
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.48px;
        padding-bottom:10px
    }
    p{
        width:180px;
        color: ${theme.color.black};
        font-family: ${theme.fonts.epilogue};
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: -0.36px;
    }
    .div-img{
        width: 83px;
    }
    .img{
        width: 83px;
        height: 119px;
        border-radius:8px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
`
export const ButtonPrev = styled.button`
        border-radius: 8px 0px 0px 8px;
        border: 1px solid #D0D5DD;
        background: #FFF;
        color: ${theme.color.blue600};
        font-family: ${theme.fonts.epilogue};
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        padding: 10px 16px;
        justify-content: center;
        align-items: center;
        cursor:pointer;
        display: flex;
        gap: 8px;
`
export const ButtonNext = styled.button`
        border-radius: 0px 8px 8px 0px;
        border: 1px solid #D0D5DD;
        background: #FFF;
        color: ${theme.color.blue600};
        font-family: ${theme.fonts.epilogue};
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        padding: 10px 16px;
        justify-content: center;
        align-items: center;
        cursor:pointer;
        display: flex;
        gap: 8px;
`
export const Numbers = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F9FAFB;
        color: ${theme.color.blue600};
        font-family: ${theme.fonts.epilogue};
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        border: 1px solid #D0D5DD;
        padding: 13px 13px;
        width:40px;
        height:40px;
       
`
export const Footer = styled.footer`
    text-align:center;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const Results = styled.p`
        color: ${theme.color.blue200};
        font-family: ${theme.fonts.epilogue};
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.36px;
        text-align: center;
        padding:20px
        

`