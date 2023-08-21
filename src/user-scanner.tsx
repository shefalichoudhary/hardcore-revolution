import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

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
      { fps: 10, qrbox: { width: 180, height: 200 } },

      /* verbose= */ false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }

  return (
    <div className=" text-center my-20 container m-auto max-w-xl">
      <div className="font-light text-xl my-4 tracking-widest">
        FOR USER DETAILS
      </div>
      <div className=" " id="reader">
        <button
          className="px-6 py-3 text-sm mb-8 font-normal  mt-4  rounded tracking-widest md:px-9 md:py-4 md:my-5 bg-stone-900 text-white "
          type="button"
          onClick={onHandleClick}
        >
          SCAN NOW
        </button>
      </div>
    </div>
  );
};
export default UserScanner;
