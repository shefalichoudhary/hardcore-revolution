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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-300 py-3 md:py-12 px-2">
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 w-full max-w-md text-center border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 font-serif">
          Welcome Back!
        </h1>
        <InsertEmoticonSharpIcon
          sx={{ fontSize: "54px", color: "#000" }}
          className="mb-4"
        />
        <p className="text-gray-700 mb-6 tracking-wide">
          Sign in to access your dashboard and connect with our fitness community.
        </p>
        <button
          className="w-full bg-black text-white py-3 rounded-md text-base font-medium tracking-wide shadow-md hover:bg-gray-900 transition-transform hover:scale-105"
          onClick={handleSignIn}
        >
          Login with Google
        </button>
        <p className="text-xs text-gray-400 mt-6">
          100% secure sign-in. We never share your data.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
