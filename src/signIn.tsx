import GoogleButton from "react-google-button";
import { UserAuth } from "./context/AuthContext";
import InsertEmoticonSharpIcon from "@mui/icons-material/InsertEmoticonSharp";
function SignIn() {
  const { googleSignIn }: any = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-28 font-serif text-center">
      <div className="text-4xl">Welcome Back !</div>
      <div>
        <InsertEmoticonSharpIcon
          sx={{
            fontSize: "52px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        />
      </div>
      <div>
        <button
          className="px-6 py-3  text-sm mb-8 font-normal mt-4  rounded tracking-widest md:px-9 md:py-4 md:my-5 bg-stone-900 text-white "
          onClick={handleGoogleSignIn}
        >
          LOGIN WITH GOOGLE
        </button>
      </div>
    </div>
  );
}
export default SignIn;
