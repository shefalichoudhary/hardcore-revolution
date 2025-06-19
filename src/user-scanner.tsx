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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-200 py-10 px-2">
      <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 mx-auto flex flex-col items-center">
        {/* Icon */}
        <div className="mb-4">
          <svg
            className="w-14 h-14 text-indigo-500 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <rect
              x="3"
              y="3"
              width="7"
              height="7"
              rx="2"
              stroke="currentColor"
              strokeWidth={2}
            />
            <rect
              x="14"
              y="3"
              width="7"
              height="7"
              rx="2"
              stroke="currentColor"
              strokeWidth={2}
            />
            <rect
              x="14"
              y="14"
              width="7"
              height="7"
              rx="2"
              stroke="currentColor"
              strokeWidth={2}
            />
            <rect
              x="3"
              y="14"
              width="7"
              height="7"
              rx="2"
              stroke="currentColor"
              strokeWidth={2}
            />
          </svg>
        </div>
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 font-serif tracking-tight mb-2">
          Scan Your QR Code to View Your Details
        </h1>
        <p className="text-base md:text-lg text-slate-600 mb-6 font-sans">
          Simply scan your personal QR code below to instantly access your
          membership information and profile.
        </p>

        {!scanning ? (
          <div className="mb-6 text-gray-600">
            Click the button below to activate your camera and start scanning.
          </div>
        ) : (
          <div className="mb-4 text-green-700 font-medium">
            Scanner is active. Hold a QR code in front of your camera.
          </div>
        )}

        {scannedCode && (
          <div className="mb-4 text-blue-700">
            Scanned QR Code: <strong>{scannedCode}</strong>
          </div>
        )}

        <div className="mb-6 w-full flex justify-center" id="reader" />

        {!scanning && (
          <button
            className="px-8 py-3 text-base font-semibold rounded-full tracking-widest bg-indigo-600 text-white shadow hover:bg-indigo-700 transition-all duration-200"
            type="button"
            onClick={onHandleClick}
          >
            START SCANNING
          </button>
        )}

        <div className="mt-8 text-xs text-slate-400 text-center">
          <span className="inline-block align-middle mr-1">💡</span>
          Tip: Make sure your camera is clean and the QR code is well-lit for best
          results.
        </div>
      </div>
    </div>
  );
};

export default UserScanner;
