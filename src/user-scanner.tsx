import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

import { Button, Box } from "@mui/material/";

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
    <>
      <Box
        sx={{ width: "700px", justifyContent: "center", alignItems: "center" }}
      >
        <h1>lkjfdsjfsdopfpsfkfjdslkfjpdjwerkkljpfpdsfrepj</h1>
        <div id="reader"></div>
        <Button type="button" onClick={onHandleClick}>
          Scan Now
        </Button>
      </Box>
    </>
  );
};
export default UserScanner;
