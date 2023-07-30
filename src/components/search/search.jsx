import React, { Fragment, useState } from "react";
import theme from "../../theme/theme";
import { DivInput } from "./style";

const Enter = {
  width: "15%",
  display: "none",
  fontFamily: theme.fonts.epilogue,
  fontSize: "12px",
  marginTop: "8px",
};
export default function Search(props) {
    
  const [teste, setTeste] = useState(props.hidden);

  return (
    <Fragment>
      <DivInput>
        {teste ? (
          <>
            <span style={Enter} className={"enter"}>
              Aperte Enter
            </span>
            <img src={theme.icons.search}></img>
            <input
              id="search"
              type="text"
              placeholder="Busque um agente"
            ></input>
          </>
        ) : (
          ""
        )}
      </DivInput>
    </Fragment>
  );
}
