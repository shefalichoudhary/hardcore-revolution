import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import { useRequireAuth } from "./context/AuthContext";
import { useState } from "react";

const UserScanner = () => {
  useRequireAuth();
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [scannedCode, setScannedCode] = useState("");

  function onHandleClick() {
    setScanning(true);

    function onScanSuccess(decodedText: any) {
      console.log(`Code matched = ${decodedText}`);
      setScannedCode(decodedText);
      navigate(`/user/${decodedText}`, { replace: true });
    }

    function onScanFailure(error: any) {
      console.warn(`Code scan error = ${error}`);
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 180, height: 200 } },
      false
    );

    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }

  return (
    <div className=" min-h-min text-center my-20 container m-auto max-w-xl">
      <div className="font-light text-xl my-4 tracking-widest">
        SCAN USER QR CODE
      </div>

      {!scanning ? (
        <div className="mb-6 text-gray-600">
          Click the button below to start scanning a user’s QR code.
        </div>
      ) : (
        <div className="mb-4 text-green-700 font-medium">Scanner is active. Hold a QR code in front of your camera.</div>
      )}

      {scannedCode && (
        <div className="mb-4 text-blue-700">
          Scanned QR Code: <strong>{scannedCode}</strong>
        </div>
      )}

      <div className="mb-6" id="reader" />

      {!scanning && (
        <button
          className="px-6 py-3 text-sm font-normal mt-4 rounded tracking-widest md:px-9 md:py-4 bg-stone-900 text-white"
          type="button"
          onClick={onHandleClick}
        >
          SCAN NOW
        </button>
      )}
    </div>
  );
};

export default UserScanner;
