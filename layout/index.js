import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import BackgroundImage from "@/components/background-image";

const Layout = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid xs={12} sm={12} md={12}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
