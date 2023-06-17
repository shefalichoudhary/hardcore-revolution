import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

import { Button, Box } from "@mui/material/";
import { Container } from "@material-ui/core";

const UserScanner = () => {
  const navigate = useNavigate();
  function onHandleClick() {
    function onScanSuccess(decodedText: any) {
      console.log(`Code matched = ${decodedText}`);

      navigate(`/user/${decodedText}`, { replace: true });
    }

    function onScanFailure(error: any) {
      console.warn(`Code scan error = ${error}`);
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },

      /* verbose= */ false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }

  return (
    <Container style={{ margin: "130px", alignItems: "center" }}>
      <Box
        sx={{ width: "500px", justifyContent: "center", alignItems: "center" }}
      >
        <div id="reader">
          <Button type="button" onClick={onHandleClick}>
            Scan Now
          </Button>
        </div>
      </Box>
    </Container>
  );
};
export default UserScanner;
