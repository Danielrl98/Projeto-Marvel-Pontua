import styled from "styled-components";
import theme from "../../../../theme/theme";

export const ComicsGrid = styled.div`

li{
    list-style: none;
    a{
    color: ${theme.color.gray500};
    font-family: ${theme.fonts.inter};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-decoration: none;
    }
    
}

`