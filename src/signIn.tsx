import React from "react";
import { UserAuth } from "./context/AuthContext";
import InsertEmoticonSharpIcon from "@mui/icons-material/InsertEmoticonSharp";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { googleSignIn } = UserAuth() || {};
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      if (googleSignIn) {
        await googleSignIn();
        navigate("/");
      } else {
        console.error("googleSignIn is not defined");
      }
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <div className="pt-16 py-12 px-2 md:px-8 flex items-center justify-center  md:min-h-screen">
      <div className="bg-white rounded-xl shadow-2xl p-7 md:p-6 w-full max-w-md md:max-w-lg lg:max-w-xl text-center border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-3 font-serif">
          Welcome Back!
        </h1>
        <InsertEmoticonSharpIcon
          sx={{ fontSize: "54px", color: "#000" }}
          className="mb-3"
        />
        <p className="text-gray-700 mb-4 tracking-wide">
          Sign in to access your dashboard and connect with our fitness community.
        </p>
        <button
          className="w-full bg-black text-white py-3 rounded-md text-base font-medium tracking-wide shadow-md hover:bg-gray-900 transition-transform hover:scale-105"
          onClick={handleSignIn}
        >
          Login with Google
        </button>
        <p className="text-xs text-gray-400 mt-4">
          100% secure sign-in. We never share your data.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
