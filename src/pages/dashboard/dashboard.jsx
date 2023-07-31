import React, { Fragment, useEffect } from "react";
import Menu from "../../layouts/menu/menu";
import { Grid } from "./style";
import Search from "../../layouts/search/search";

import Characters from "./componentes/characters/characters";


export default function Dashboard() {
 

  return (
    <Fragment>
      <Grid>
        <div>
          <Menu />
        </div>
        <div>
          <Search hidden={true}/>
          <Characters />
        </div>
      </Grid>
    </Fragment>
  );
}
