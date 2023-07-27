import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 256px 1fr ;

    @media(max-width:767px){
        display:flex;
        flex-direction: column;
    }
`
