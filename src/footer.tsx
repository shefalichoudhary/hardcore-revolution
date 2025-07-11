import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function SimpleBottomNavigation() {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border-t border-gray-200 text-black font-serif">
      <div className="max-w-7xl mx-auto px-5 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left: Brand */}
        <div className="text-left md:text-left  font-extrabold tracking-widest">
          <a
            href="/"
            className="bg-gradient-to-r from-black to-yellow-600 bg-clip-text text-transparent select-none text-xl"
          >
            Hardcore Revolution
          </a>
          <div className="text-xs text-gray-800 mt-1">
            Your Fitness, Our Passion
          </div>
        </div>

        {/* Center: Copyright (centered on md+) */}
        <div className=" md:block text-xs text-gray-700 md:text-center w-full">
          © {new Date().getFullYear()} Hardcore Revolution Gym.in
          <br />
          All Rights Reserved.
        </div>

        {/* Right: Contact and Social */}
        <div className="flex flex-col md:items-end items-start gap-2">
          <div className="flex gap-3 mb-1">
            {/* Email */}
            <a
              href="mailto:choudharyshefali@gmail.com"
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 transition transform active:scale-110"
              title="Email"
            >
              <EmailIcon className="text-black transition pointer-events-none" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 transition transform active:scale-110"
              title="Instagram"
            >
              <InstagramIcon className="text-black transition pointer-events-none" />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/919329751342"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 transition transform active:scale-110"
              title="WhatsApp"
            >
              <WhatsAppIcon className="text-black transition pointer-events-none" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 transition transform active:scale-110"
              title="Facebook"
            >
              <FacebookIcon className="text-black transition pointer-events-none" />
            </a>

            <a
              href="tel:+919329751342"
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-300 transition transform active:scale-110"
              title="Call"
            >
              <PhoneIcon className="text-black transition pointer-events-none" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
