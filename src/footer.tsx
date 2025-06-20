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
        <div className="text-left md:text-left text-lg font-extrabold tracking-widest">
          <a
            href="/"
            className="bg-gradient-to-r from-black to-yellow-600 bg-clip-text text-transparent select-none"
          >
            Hardcore Revolution
          </a>
          <div className="text-xs text-gray-500 mt-1">
            Your Fitness, Our Passion
          </div>
        </div>

        {/* Center: Navigation & Copyright */}
        <div className="flex flex-col items-left md:items-center">
          <nav className="mb-2 flex gap-4 text-sm font-medium">
            <a
              href="/"
              className="hover:text-yellow-600 transition"
            >
              Home
            </a>
            <a
              href="/userForm"
              className="hover:text-yellow-600 transition"
            >
              Join
            </a>
            <a
              href="/users"
              className="hover:text-yellow-600 transition"
            >
              Members
            </a>
            <a
              href="/user-scanner"
              className="hover:text-yellow-600 transition"
            >
              Scan
            </a>
          </nav>
          <div className="text-xs text-gray-700 text-center">
            © {new Date().getFullYear()} Hardcore Revolution Gym.in
            <br />
            All Rights Reserved.
          </div>
        </div>

        {/* Right: Contact and Social */}
        <div className="flex flex-col md:items-end items-start gap-2">
          <div className="flex gap-3 mb-1">
            {/* Email */}
            <a
              href="mailto:choudharyshefali@gmail.com"
              className="hover:text-yellow-600 transition"
              title="Email"
            >
              <EmailIcon />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
              title="Instagram"
            >
              <InstagramIcon style={{ color: "#E1306C" }} />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/919329751342"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
              title="WhatsApp"
            >
              <WhatsAppIcon style={{ color: "#25D366" }} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
              title="Facebook"
            >
              <FacebookIcon style={{ color: "#1877F2" }} />
            </a>

            <a
              href="tel:+919329751342"
              className="hover:text-yellow-600 transition"
              title="Call"
            >
              <PhoneIcon />
            </a>
          </div>
         
        </div>
      </div>
    </footer>
  );
}
