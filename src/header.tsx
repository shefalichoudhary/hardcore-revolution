import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { UserAuth } from "./context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function DrawerAppBar() {
  const [open, setOpen] = React.useState(false);
  const { user,loading, logOut }: any = UserAuth();
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
        ["Form", "/userForm"],
        ["Archive", "/users"],
        ["Scan", "/user-scanner"],
      ]
    : [
        ["Home", "/"],
        ["Login", "/signIn"],
      ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-md font-medium  font-serif tracking-widest bg-gradient-to-r from-stone-900 to-yellow-800 bg-clip-text text-transparent "
        >
          Hardcore Revolution
        </Link>

       

        {/* Toggle */}
        
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden text-black cursor-pointer"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 font-serif text-sm">
          {links.map(([title, url]) => (
            <li key={title}>
              <Link
                to={url}
                className="text-black hover:underline underline-offset-4 transition duration-300"
              >
                {title}
              </Link>
            </li>
          ))}
          {user?.displayName && (
            <li>
              <button
                onClick={handleSignOut}
className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-stone-900 text-white rounded-md text-sm hover:bg-stone-700 transition"

              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
     <div
  className={`md:hidden transition-all duration-500 ease-in-out transform ${
    open ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
  } overflow-hidden`}
>
  <div className="bg-white shadow-xl rounded-xl  mt-4 px-4 py-2  border border-gray-200 backdrop-blur-md transition-all duration-300">
    

    <ul className="flex flex-col gap-3 text-sm font-serif">
      {links.map(([title, url]) => (
        <li key={title}>
          <Link
            to={url}
            onClick={() => setOpen(false)}
            className="block w-full px-2 py-1 rounded hover:bg-stone-100 transition"
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
className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-stone-900 text-white rounded-md text-sm hover:bg-stone-700 transition"

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-9v1"
              />
            </svg>
            Logout
          </button>
        </li>
      )}
    </ul>
  </div>
</div>
    </nav>
  );
}
