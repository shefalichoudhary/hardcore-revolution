import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          backgroundImage: "url(/boiler-img.jpg)",
          height: "600px",
          width: "1537px",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "bolder",
            paddingTop: "1px",
            textAlign: "center",
            maxWidth: "890px",
          }}
        >
          <Container style={{ paddingTop: "158px" }}>
            <h3 style={{ marginBottom: "-45px" }}>FUEL YOUR</h3>
            <h1
              style={{
                fontSize: "68px",
                marginBottom: "-15px",
                letterSpacing: "8px",
              }}
            >
              BODY FITNESS
            </h1>
            <p
              style={{
                fontSize: "15px",
                letterSpacing: "1.5px",
                lineHeight: "25px",
              }}
            >
              When we create Gym Base, we knew we want to be more than just a
              <div>
                simple gym Having worked in traditional gyms in the past
              </div>
            </p>

            <Button
              style={{
                padding: "12px 34px 12px 34px ",
                background: "white",
                color: "black",
                fontWeight: "bold",
                marginTop: "16px",
              }}
              onClick={() => {
                navigate("/UserForm");
              }}
            >
              JOIN NOW
            </Button>
          </Container>
        </div>
      </div>
    </>
  );
}
export default Home;
