import { useEffect, useState } from "react";
import { colRef } from "./firebase";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useRequireAuth } from "./context/AuthContext";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

export default function Users() {
  useRequireAuth();
  const [allDocs, setAllDocs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  return (
    <div className="min-h-screen flex-1 py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 font-serif tracking-wider text-stone-800">
        Registered Users
      </h2>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <CircularProgress color="inherit" />
        </div>
      ) : allDocs.length === 0 ? (
        <div className="text-center text-gray-600 text-lg space-y-3">
          <p>No users found.</p>
          <Link
            to="/userForm"
            className="inline-block bg-stone-800 text-white px-5 py-2 rounded shadow-md hover:bg-stone-700 transition-all"
          >
            + Add User
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {allDocs.map((item) => (
            <div
              key={item.key}
              className="bg-white shadow-lg rounded-xl px-4 py-5 flex justify-between items-center hover:shadow-xl transition-all duration-200"
            >
              <div className="flex gap-4 items-center">
                <AccountCircleIcon sx={{ fontSize: 50 }} className="text-stone-700" />
                <div>
                  <div className="text-lg font-semibold capitalize text-stone-800">
                    {item.fullname}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.district || "No district"}, Age: {item.age || "N/A"}
                  </div>
                  <div className="text-sm text-gray-500">
                    📞 {item.number || "Not provided"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => deleteUserData(item.key)}
                  className="txt-black hover:text-red-800 transition-colors"
                  title="Delete"
                >
                  <DeleteIcon />
                </button>
                <Link
                  to={`/user/${item.key}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
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
