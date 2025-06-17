import { useEffect, useState } from "react";
import { colRef } from "./firebase";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useRequireAuth } from "./context/AuthContext";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Users() {
  useRequireAuth();
  const [allDocs, setAllDocs] = useState<any[]>([]);

  const fetchUsers = async () => {
    const data: any[] = [];
    const querySnapshot = await getDocs(colRef);
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), key: doc.id });
    });
    setAllDocs(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUserData = async (key: string) => {
    await deleteDoc(doc(colRef, key));
    fetchUsers(); // Better than reloading the page
  };

  return (
    <div className="  min-h-screen flex-1 py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-10 font-serif tracking-wide">
        All Users
      </h2>

      <div className="grid gap-2">
        {allDocs.map((item) => (
          <div
            key={item.key}
            className="bg-white shadow-md rounded-xl p-2 md:p-2 flex items-center justify-between transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="text-gray-600">
                <AccountCircleIcon sx={{ fontSize: 50 }} />
              </div>
              <div className="text-lg md:text-md font-medium text-gray-800">
                {item.data.fullname}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="text-black hover:text-red-700 transition-colors"
                onClick={() => deleteUserData(item.key)}
                title="Delete User"
              >
                <DeleteIcon />
              </button>
              <Link
                to={`/user/${item.key}`}
                className="text-blue-500 hover:text-blue-700 transition-colors"
                title="View Details"
              >
                <ArrowForwardIosIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
