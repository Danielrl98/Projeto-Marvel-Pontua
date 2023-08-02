import styled from "styled-components";
import theme from "../theme/theme";

export const NormalButton = styled.div`

        display: flex;
        align-items: center;
        justify-content: center;

        button{
        padding: 16px 20px;
        gap: 9px;
        border-radius: 10px;  
        font-family: Epilogue;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -1.56px;
        cursor: pointer;
        background-color: ${theme.color.blue600};
        color: ${theme.color.gray150};
        border: none;
        width: 100%;
        text-align: center;
        }
        .disabled{
            background-color:#C3C3C3;
            color: ${theme.color.white};
        }
`