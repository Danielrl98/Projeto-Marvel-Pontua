import React, { Fragment } from "react";
import theme from "../../theme/theme";
import { DivInput } from "./style";
export default function Search(){
    return(
        <Fragment>
            <DivInput>
                <img src={theme.icons.search}></img><input id="search" type="text" placeholder="Busque um agente"></input>
            </DivInput>
        </Fragment>
    )
}