import React, { Fragment, useEffect } from "react";
import Menu from "../../components/menu/menu";
import { Grid } from "./style";
import Search from "../../components/search/search";

import Characters from "./componentes/characters/characters";

export default function Dashboard() {
 
  return (
    <Fragment>
      <Grid>
        <div>
          <Menu />
        </div>
        <div>
          <Search />
          <Characters />
        </div>
      </Grid>
    </Fragment>
  );
}
