import * as React from "react";
import Box from "@mui/material/Box";

import { Container, Grid } from "@mui/material";

export default function SimpleBottomNavigation() {
  return (
    <Box style={{ background: "black", color: "white" }}>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        marginTop={9}
        paddingTop={2}
        paddingBottom={5}
      >
        <Container maxWidth={"xl"}>
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item xs={6}>
              <span style={{ fontSize: "17px" }}> Hardcore Revolution</span>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "19px" }}>Contact Us :</div>
              <div
                style={{
                  fontSize: "14px",
                  marginTop: "12px",
                  paddingBottom: "10px",
                }}
              >
                Email: choudharyshefali@gmail.com
              </div>
              <div>
                <span
                  style={{
                    paddingBottom: "20px",
                    fontSize: "14px",
                    marginTop: "12px",
                  }}
                >
                  contact no:
                </span>{" "}
                9329751342
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
}
