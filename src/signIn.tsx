import GoogleButton from "react-google-button";
import { UserAuth } from "./context/AuthContext";
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
    <>
      <h1>Sign In</h1>
      <div>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </>
  );
}
export default SignIn;
