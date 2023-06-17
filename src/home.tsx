import { Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" style={{ padding: "0px", margin: "0px" }}>
      <div className="img">
        <div
          style={{
            fontSize: "bolder",
            textAlign: "center",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            marginTop={7}
            color="white"
          >
            <Container
              maxWidth={"md"}
              style={{
                padding: "110px 0px 100px 0px",
                marginLeft: "0px",
                justifyItems: "center",
              }}
            >
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs={12}>
                  <h3 style={{ marginBottom: "-45px" }}>FUEL YOUR</h3>
                </Grid>
                <Grid item xs={12}>
                  <h1 className="home-heading">BODY FITNESS</h1>
                </Grid>
                <Grid item xs={12}>
                  <p
                    style={{
                      letterSpacing: "1.2px",
                      lineHeight: "25px",
                      textAlign: "center",
                    }}
                    className="home"
                  >
                    When we create Gym Base, we knew we want to be more than
                    just a
                    <br />
                    simple gym Having worked in traditional gyms in the past
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    style={{
                      padding: "16px 38px 16px 38px ",
                      background: "white",
                      color: "black",
                      fontWeight: "bold",
                      marginTop: "12px",
                    }}
                    onClick={() => {
                      navigate("/UserForm");
                    }}
                  >
                    JOIN NOW
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
export default Home;
