import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

import { Container, Grid } from "@mui/material";

export default function SimpleBottomNavigation() {
  return (
    <BottomNavigation
      showLabels
      style={{ background: "black", color: "white", padding: "30px" }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        marginTop={9}
        paddingTop={2}
        paddingBottom={5}
      >
        <Container maxWidth={"lg"}>
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item xs={6}>
              <span> Hardcore Revolution</span>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "20px" }}>Contact Us :</div>
              <div
                style={{
                  fontSize: "14px",
                  marginTop: "12px",
                  paddingBottom: "10px",
                }}
              >
                Email: choudharyshefali@gmail.com
              </div>
              <div style={{ paddingBottom: "20px" }}>
                contact no: 9329751342
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </BottomNavigation>
  );
}
