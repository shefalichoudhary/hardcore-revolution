import { AuthContextProvider } from "./context/AuthContext";
import MenuBar from "./header";
import SignIn from "./signIn";

import { Routes, Route } from "react-router-dom";
import Home from "./home";
import UserForm from "./context/userForm";
import Users from "./users";
import SinglePage from "./single-page";
import UserScanner from "./user-scanner";
import Footer from "./footer";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/userForm" element={<UserForm />}></Route>
          <Route path="/user/:id" element={<SinglePage />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/user-scanner" element={<UserScanner />}></Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}
export default App;
