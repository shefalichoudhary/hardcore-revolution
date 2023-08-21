import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { UserAuth } from "./context/AuthContext";

export default function DrawerAppBar(props: any) {
  const [open, setOpen] = React.useState(true);
  const { user, logOut }: any = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error, "logout");
    }
  };
  console.log(open);

  return (
    <>
      {user?.displayName ? (
        <>
          <nav className="md:flex md:items-center md:justify-between py-4 px-8 shadow-xl ">
            <a href="/" className="font-serif tracking-widest ">
              Hardcore Revolution
            </a>
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-5 cursor-pointer md:hidden"
            >
              {open ? <MenuIcon /> : <CloseIcon />}
            </div>
            <ul
              className={`md:flex md :items-center tracking-wide  md:pb-0 pb-2  md:pt-0 pt-2 font-serif  ${
                open ? "hidden" : "static"
              } `}
            >
              {[
                ["Home", "/"],
                ["Form", "/userForm"],
                ["Archive", "/users"],
                ["Scan", "/user-scanner"],
              ].map(([title, url]) => (
                <li key={title} className=" md:mx-3 md:my-0 my-3">
                  <a
                    href={url}
                    className="   text-black font-medium  hover:underline decoration-1 duration-500 "
                  >
                    {title}
                  </a>
                </li>
              ))}
              <button
                className="  text-black tracking-wide mx-0 md:mx-2 "
                onClick={handleSignOut}
              >
                Logout
              </button>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <nav className="md:flex md:items-center md:justify-between py-4 px-8  shadow-xl ">
            <a href="/" className="font-serif tracking-widest ">
              Hardcore Revolution
            </a>
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-5 cursor-pointer md:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </div>
            <ul
              className={`md:flex md :items-center tracking-wide    md:pt-0 pt-2 font-serif ${
                open ? "top-70" : "top-[-490px]"
              } `}
            >
              {[
                ["Home", "/"],
                ["Login", "/signIn"],
              ].map(([title, url]) => (
                <li key={title} className="md:mx-4 md:my-0 my-2">
                  <a
                    href={url}
                    className="   text-black font-medium  hover:underline decoration-1 duration-500 "
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
