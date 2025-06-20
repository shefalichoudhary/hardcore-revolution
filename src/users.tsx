import { useEffect, useState } from "react";
import { colRef } from "./firebase";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { isAdmin, useRequireAuth, UserAuth } from "./context/AuthContext";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default function Users() {
  useRequireAuth();
  const { user } = UserAuth() || {};

  const [allDocs, setAllDocs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteKey, setDeleteKey] = useState<string | null>(null);

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

  const handleDelete = (key: string) => {
    setDeleteKey(key);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (deleteKey) {
      await deleteDoc(doc(colRef, deleteKey));
      fetchUsers();
      setDeleteKey(null);
      setConfirmOpen(false);
    }
  };

  const cancelDelete = () => {
    setDeleteKey(null);
    setConfirmOpen(false);
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
    <div className="min-h-screen flex-1 py-18 px-2 md:px-8   bg-gradient-to-br from-white via-gray-100 to-gray-200 font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 font-serif tracking-tight text-black drop-shadow">
        Meet Our Community
      </h2>

      {/* Modern Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 bg-white shadow transition placeholder-gray-400 text-black text-base font-sans"
            placeholder="Search by name, age or address..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600">
            <SearchIcon />
          </span>
          {search && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-600 transition"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <ClearIcon />
            </button>
          )}
        </div>
      </div>

      {/* Custom Delete Confirmation Modal */}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-xs text-center border border-gray-200">
            <h3 className="text-lg font-bold mb-3 text-black">Delete User?</h3>
            <p className="mb-6 text-gray-600">Are you sure you want to delete this user? This action cannot be undone.</p>
            <div className="flex justify-between gap-4">
              <button
                onClick={cancelDelete}
                className="flex-1 py-2 rounded bg-gray-100 text-black font-semibold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-2 rounded bg-black text-white font-semibold hover:bg-yellow-600 hover:text-black transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <CircularProgress color="inherit" />
        </div>
      ) : filteredDocs.length === 0 ? (
        <div className="text-center text-gray-600 text-lg space-y-3 font-sans">
          <p>No users found.</p>
          <Link
            to="/userForm"
            className="inline-block bg-black text-white px-5 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-black transition-all font-semibold"
          >
            + Add User
          </Link>
        </div>
      ) : (
        <div
          className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {filteredDocs.map((item) => (
            <div
              key={item.key}
              className="bg-white shadow-md rounded-2xl px-4 py-5 flex flex-col gap-2 hover:shadow-lg transition-all duration-200 border border-gray-200 group font-sans"
            >
              {/* Row 1: Icon + Name (left aligned) */}
              <div className="flex items-center gap-1 ">
                <AccountCircleIcon sx={{ fontSize: 38 }} className="text-gray-500 group-hover:scale-110 transition" />
                <span className="text-base font-semibold capitalize text-black">
                  {item.fullname}
                </span>
              </div>
              {/* Row 2: District left, actions right */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                <span className="text-xs text-gray-500">{item.district || "No district"}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(item.key)}
                    className="text-black hover:text-yellow-600 transition-colors"
                    title="Delete User"
                  >
                    <DeleteIcon fontSize="small" />
                  </button>
                  <Link
                    to={`/user/${item.key}`}
                    className="text-yellow-800 hover:text-black transition-colors"
                    title="View"
                  >
                    <ArrowForwardSharpIcon fontSize="small" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
