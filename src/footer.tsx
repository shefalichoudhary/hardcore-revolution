import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

import { Container, Grid } from "@mui/material";

export default function SimpleBottomNavigation() {
  return (
    <Box style={{ paddingTop: "158px" }}>
      <BottomNavigation
        showLabels
        style={{ background: "black", color: "white" }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          marginTop={7}
        >
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item xs={8}>
              <img src="./logo.jpg" style={{ height: "30px" }}></img>
              <span> Hardcore Revolution</span>
            </Grid>

            <Grid
              item
              xs={4}
              style={{ alignItems: "right", justifyContent: "right" }}
            >
              <div>Contact Us</div>
              <div>Email: choudharyshefali@gmail.com</div>
              <div>contact us: 9329751342</div>
            </Grid>
          </Grid>
        </Grid>
      </BottomNavigation>
    </Box>
  );
}
