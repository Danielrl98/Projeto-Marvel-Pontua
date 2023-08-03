import styled from "styled-components";
import theme from "../../theme/theme";

export const Hero = styled.div`

    h1{
        margin-bottom:16px
    }
    select {
        display: flex;
        padding: 10px 14px 10px 40px;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        border-radius: 8px;
        border: 1px solid ${theme.color.gray300};
        background: #fff;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        width: 100%;
        margin-bottom: 16px;
        color: ${theme.color.gray900};
        font-family: ${theme.fonts.inter};
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; 
        margin-top:5px;
    }
`  
export const Submit = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;

    button{
        display: flex;
        padding: 12px 30px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        border: 1px solid ${theme.color.blue800};
        background: ${theme.color.blue800};
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        cursor: pointer;
        color:white;
        font-family: ${theme.fonts.inter};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; 
    }

`
export const Select = styled.div`
    .fake-select {
        position: relative;
        width: 100%;
    }
    .no-select{
        display: flex;
        gap: 11px;
    }

.selected-option {
    display: flex;
    padding: 10px 14px 10px 14px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid ${theme.color.gray300};
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    width: 100%;
    margin-bottom: 16px;
    color: ${theme.color.gray900};
    font-family: ${theme.fonts.inter};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
    margin-top:5px;
    cursor:pointer;
    position: relative;
    
    .arrow{
        position: absolute;
        z-index: 0; 
        cursor: auto;
        right:10px;
        top:13px
    }
    .up{
        top:17px;
        right:14px;
    }
    .principal{
        display: flex;
        flex-direction: row;
        gap:8px;
    }
}
.div-options{
    position: relative;
}
.options {
  position: absolute;
  z-index: 1;
  border-top: none;
  overflow-y: auto;
  display: flex;
   padding: 10px 14px 10px 0;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid ${theme.color.gray300};
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    width: 100%;
    margin-bottom: 16px;
    color: ${theme.color.gray900};
    font-family: ${theme.fonts.inter};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
    margin-top:5px;
    cursor:pointer;
    display:flex !important;
    flex-direction: column;
    justify-content: initial;
    align-items: initial !important;
    max-height: 300px;

    .options-img{
        display:flex;
        flex-direction: row;
        gap: 8px;
        align-items: initial;
        justify-content: initial;
        padding: 10px;
    }
   
}
.img{
        display: flex;
        width: 24px;
        height: 24px;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
        background-size: cover;
        border-radius: 200px;
    }

.option {
  cursor: pointer; 
  position: absolute;
  z-index: 1;
  left:0px;

  div{
    padding-left:40px
  }
}

.option:hover {
  background-color: transparent;
}
`