import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import MenuBar from "./header";
import SignIn from "./signIn";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import UserForm from "./context/userForm";
import Users from "./users";
import SinglePage from "./single-page";
import UserScanner from "./user-scanner";
import Footer from "./footer";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  return (
    <AuthContextProvider>
      <AppContent />
    </AuthContextProvider>
  );
}

function AppContent() {
  const { loading } = UserAuth() || {};

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-gray-500 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <main className="flex-1 py-12 px-2 md:px-8 mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-200 font-sans pt-16 "> 
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
    </main>
  );
}

export default App;
