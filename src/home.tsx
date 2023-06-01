import { Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          backgroundImage: "url(/home-img.jpg)",
          height: "50%",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: " no-repeat",
        }}
      >
        <div
          style={{
            fontSize: "bolder",
            paddingTop: "1px",
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
              style={{ padding: "110px 0px 100px 0px", marginLeft: "0px" }}
            >
              <Grid container direction="row" alignItems="center" spacing={4}>
                <Grid item xs={12}>
                  <h3 style={{ marginBottom: "-45px" }}>FUEL YOUR</h3>
                </Grid>
                <Grid item xs={12}>
                  <h1
                    style={{
                      fontSize: "68px",
                      marginBottom: "-20px",
                      letterSpacing: "8px",
                    }}
                  >
                    BODY FITNESS
                  </h1>
                </Grid>
                <Grid item xs={12}>
                  <p
                    style={{
                      fontSize: "15px",
                      letterSpacing: "1.2px",
                      lineHeight: "25px",
                      textAlign: "center",
                    }}
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
    </>
  );
}
export default Home;
