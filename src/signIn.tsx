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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-300 py-6 md:py-20 px-2">
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 w-full max-w-md text-center border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
          Welcome Back!
        </h1>
        <InsertEmoticonSharpIcon
          sx={{ fontSize: "54px", color: "#2563eb" }}
          className="mb-4"
        />
        <p className="text-gray-600 mb-6 tracking-wide">
          Please sign in to continue to your dashboard.
        </p>
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-md text-base font-medium tracking-wide shadow-md hover:bg-blue-700 transition-transform hover:scale-105"
          onClick={handleSignIn}
        >
          Login with Google
        </button>
        <p className="text-xs text-gray-400 mt-6">
          Secure sign-in using your Google Account
        </p>
      </div>
    </div>
  );
};

export default SignIn;
