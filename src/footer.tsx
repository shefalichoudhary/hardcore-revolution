import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function SimpleBottomNavigation() {
  return (
    <div className="bg-white text-black py-6 px-5 font-serif border-t">
      <div className="lg:container m-auto grid md:grid-cols-3 gap-6 px-5 md:px-0 items-center">
        {/* Left: Brand */}
        <div className="text-left text-sm font-serif  tracking-wider">
          <a href="/">Hardcore Revolution</a>
        </div>

        {/* Center: Copyright */}
        <div className="md:text-center text-xs text-gray-700">
          © 2023 Hardcore Revolution Gym.in. All Rights Reserved.
        </div>

        {/* Right: Contact and Social */}
        <div className="flex justify-left md:justify-end items-center space-x-4 text-gray-800 text-sm">
          {/* Phone */}
        

          {/* Email */}
          <a
            href="mailto:choudharyshefali@gmail.com"
            className="hover:text-stone-700"
            title="Email"
          >
              <EmailIcon />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
            title="Instagram"
          >
                <InstagramIcon style={{ color: "#E1306C" }} />
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/919329751342"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
            title="WhatsApp"
          >
               <WhatsAppIcon style={{ color: "#25D366" }} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
            title="Facebook"
          >
       <FacebookIcon style={{ color: "#1877F2" }} />
          </a>

          
            <a
            href="tel:+919329751342"
            className="hover:text-stone-700"
            title="Call"
          >
             <PhoneIcon style={{ color: "#1877F2" }}  />
          </a>
        </div>
      </div>
    </div>
  );
}
