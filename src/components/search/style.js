import styled from "styled-components";
import theme from "../../theme/theme";

export const DivInput = styled.div`
  width:100%;
  display:flex;
  padding:22px 37px 23px 37px;
  gap: 16px;
  border-bottom: 1px solid ${theme.color.divider};

  input{
    
    border: none;
    width:100%;
    outline: none;

    &::placeholder{
        color: ${theme.color.blue200};
        font-family: ${theme.fonts.epilogue};
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.36px;
    }
    
  }

`