import React, { Fragment } from "react";
import Menu from "../../components/menu/menu";
import { Grid } from "./style";

export default function Dashboard() {
  return (
    <Fragment>
      <Grid>
        <div>
          <Menu />
        </div>
        <div style={{ paddingBottom: '1000px'}}>
            dashboard
        </div>
      </Grid>
    </Fragment>
  );
}
