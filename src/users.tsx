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
    <div className="min-h-screen flex-1 py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 font-serif tracking-wider text-stone-900">
        Registered Users
      </h2>

      {/* Modern Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-full border border-stone-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 bg-white shadow transition placeholder-stone-400 text-stone-800 text-base"
            placeholder="Search by name, age, address, or gender..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500">
            <SearchIcon />
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <CircularProgress color="inherit" />
        </div>
      ) : filteredDocs.length === 0 ? (
        <div className="text-center text-gray-600 text-lg space-y-3">
          <p>No users found.</p>
          <Link
            to="/userForm"
            className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-full shadow-md hover:bg-yellow-400 transition-all font-semibold"
          >
            + Add User
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredDocs.map((item) => (
            <div
              key={item.key}
              className="bg-white shadow-lg rounded-2xl px-6 py-5 flex justify-between items-center hover:shadow-yellow-200 transition-all duration-200 border border-yellow-100"
            >
              <div className="flex gap-4 items-center">
                <AccountCircleIcon sx={{ fontSize: 50 }} className="text-yellow-600" />
                <div>
                  <div className="text-lg font-semibold capitalize text-stone-900">
                    {item.fullname}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.district || "No district"}, Age: {item.age || "N/A"}
                  </div>
                  <div className="text-sm text-gray-500">
                    Gender: {item.gender || "N/A"}
                  </div>
                  <div className="text-sm text-gray-500">
                    📞 {item.number || "Not provided"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {isAdmin(user ?? null) && (
                  <button
                    onClick={() => deleteUserData(item.key)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Delete User"
                  >
                    <DeleteIcon />
                  </button>
                )}
                <Link
                  to={`/user/${item.key}`}
                  className="text-yellow-600 hover:text-yellow-800 transition-colors"
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
