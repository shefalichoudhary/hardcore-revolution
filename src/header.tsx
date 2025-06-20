import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { UserAuth } from "./context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function DrawerAppBar() {
  const [open, setOpen] = React.useState(false);
  const { user, logOut }: any = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      localStorage.removeItem("token");
      navigate("/signIn");
    } catch (error) {
      console.log(error, "logout");
    }
  };

  const links = user?.displayName
    ? [
        ["Home", "/"],
        ["Join", "/userForm"],
        ["Members", "/users"],
        ["Scan", "/user-scanner"],
      ]
    : [
        ["Home", "/"],
        ["Login", "/signIn"],
      ];

  return (
    <header className="bg-stone-900 fixed top-0 left-0 w-full z-50 shadow-md border-b border-stone-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold font-serif tracking-widest bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent select-none"
        >
          Hardcore Revolution
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-serif text-base">
          {links.map(([title, url]) => (
            <li key={title}>
              <Link
                to={url}
                className="text-white hover:text-gray-300 transition font-medium px-2 py-1 rounded"
              >
                {title}
              </Link>
            </li>
          ))}
          {user?.displayName && (
            <li>
              <button
                onClick={handleSignOut}
                className="px-4 py-1.5 bg-gray-100 text-stone-900 rounded-md text-base font-semibold hover:bg-gray-300 hover:text-stone-900 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out transform ${
          open ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        } overflow-hidden`}
      >
        <div className="bg-stone-900 shadow-xl rounded-xl mt-2 mx-2 px-4 py-3 border border-stone-800">
          <ul className="flex flex-col gap-3 text-base font-serif">
            {links.map(([title, url]) => (
              <li key={title}>
                <Link
                  to={url}
                  onClick={() => setOpen(false)}
                  className="block w-full px-2 py-2 rounded text-white hover:bg-gray-800 hover:text-gray-300 transition"
                >
                  {title}
                </Link>
              </li>
            ))}
            {user?.displayName && (
              <li className="pt-2">
                <button
                  onClick={() => {
                    handleSignOut();
                    setOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-stone-900 rounded-md text-base font-semibold hover:bg-gray-300 hover:text-stone-900 transition"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
