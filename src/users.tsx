import { useEffect, useState } from "react";
import { colRef } from "./firebase";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { isAdmin, useRequireAuth, UserAuth } from "./context/AuthContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export default function Users() {
  useRequireAuth();
  const { user } = UserAuth() || {};

  const [allDocs, setAllDocs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const fetchUsers = async () => {
    setLoading(true);
    const data: any[] = [];
    const querySnapshot = await getDocs(colRef);
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data().data, key: doc.id });
    });
    setAllDocs(data);
    setLoading(false);
  };

  const deleteUserData = async (key: string) => {
    await deleteDoc(doc(colRef, key));
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter users by search input (name, age, district, gender)
  const filteredDocs = allDocs.filter((item) => {
    const searchLower = search.toLowerCase();
    return (
      (item.fullname && item.fullname.toLowerCase().includes(searchLower)) ||
      (item.age && String(item.age).includes(searchLower)) ||
      (item.district && item.district.toLowerCase().includes(searchLower)) ||
      (item.gender && item.gender.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen flex-1 py-12 px-2 md:px-8 max-w-7xl mx-auto bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-200 font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 font-serif tracking-tight text-indigo-800 drop-shadow">
        Meet Our Community
      </h2>

      {/* Modern Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full pl-12 pr-12 py-3 rounded-full border border-indigo-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 bg-white shadow transition placeholder-slate-400 text-slate-800 text-base font-sans"
            placeholder="Search by name, age, address, or gender..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
            <SearchIcon />
          </span>
          {search && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500 transition"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <ClearIcon />
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <CircularProgress color="inherit" />
        </div>
      ) : filteredDocs.length === 0 ? (
        <div className="text-center text-slate-600 text-lg space-y-3 font-sans">
          <p>No users found.</p>
          <Link
            to="/userForm"
            className="inline-block bg-indigo-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-400 transition-all font-semibold"
          >
            + Add User
          </Link>
        </div>
      ) : (
        <div
          className="
            grid gap-5
            grid-cols-1
            sm:grid-cols-4
            md:grid-cols-5
            lg:grid-cols-6
          "
        >
          {filteredDocs.map((item) => (
            <div
              key={item.key}
              className="bg-gradient-to-br from-white via-indigo-50 to-blue-100 shadow-xl rounded-2xl px-4 py-6 flex flex-col items-center hover:shadow-indigo-300 transition-all duration-200 border border-indigo-100 group font-sans"
            >
              <AccountCircleIcon sx={{ fontSize: 50 }} className="text-indigo-500 mb-2 group-hover:scale-110 transition" />
              <div className="text-lg font-semibold capitalize text-indigo-900 text-center mb-1">
                {item.fullname}
              </div>
              <div className="text-sm text-slate-500 text-center mb-1">
                {item.district || "No district"}
              </div>
              <div className="text-sm text-slate-500 text-center mb-1">
                Age: {item.age || "N/A"}
              </div>
              <div className="text-sm text-slate-500 text-center mb-2 flex items-center justify-center gap-1">
                <PhoneIphoneIcon fontSize="small" className="text-indigo-400" />
                {item.number || "Not provided"}
              </div>
              <div className="flex items-center gap-2 mt-auto">
                
                  <button
                    onClick={() => deleteUserData(item.key)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Delete User"
                  >
                    <DeleteIcon />
                  </button>
                 {/* {isAdmin(user ?? null) && (
                  <button
                    onClick={() => deleteUserData(item.key)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Delete User"
                  >
                    <DeleteIcon />
                  </button>
                )} */}
                <Link
                  to={`/user/${item.key}`}
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  title="View"
                >
                  <ArrowForwardIosIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
