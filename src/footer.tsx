import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function SimpleBottomNavigation() {
  return (
    <div className="   py-8 px-5 font-serif shadow-xl ">
      <div className="  lg:container m-auto grid md:grid-cols-4  px-5 md:px-0  ">
        <div className="md:mb-0 mb-3">
          <a href="/" className=" tracking-widest ">
            Hardcore Revolution
          </a>
        </div>

        <div className=" md:text-right md:mb-0 mb-2">
          <a href="mailto: choudharyshefali@gmail.com">
            choudharyshefali@gmail.com
          </a>
        </div>

        <div className="md:ml-7 md:mb-0 mb-3">
          <a href="tel:+919329751342">
            <Chip
              sx={{ backgroundColor: "white" }}
              icon={<MdPhone style={{ marginBottom: "6px" }} />}
              label="Call me"
            />
          </a>
        </div>

        <div className="md:mb-0 mb-3 md:text-center">
          <a className="mr-5" href="">
            <InstagramIcon style={{ fontSize: "25px" }} />
          </a>

          <a className="mr-5" href="https://www.facebook.com/">
            <FacebookIcon style={{ fontSize: "25px" }} />
          </a>
          <a className="" href="https://www.whatsapp.com/">
            <WhatsAppIcon style={{ fontSize: "25px" }} />
          </a>
        </div>
      </div>
      <div className="md:text-center py-6 text-xs text-gray-700">
        @2023 hardcore-revolution Gym.in. All Rights Reserved.
      </div>
    </div>
  );
}
