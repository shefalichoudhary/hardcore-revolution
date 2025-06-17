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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-800 via-black to-stone-900">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-10 w-full max-w-lg text-center border border-white/20 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome Back!</h1>
        <InsertEmoticonSharpIcon
          sx={{ fontSize: "60px", color: "white" }}
          className="animate-bounce mb-4"
        />
        <p className="text-gray-300 mb-6 tracking-wide">
          Please sign in to continue to your dashboard.
        </p>
        <button
          className="w-full bg-white text-black py-3 rounded-md text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-transform hover:scale-105"
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
