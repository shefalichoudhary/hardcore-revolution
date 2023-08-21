import { useEffect, useState } from "react";

import { colRef } from "./firebase";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Users() {
  const [allDocs, setAllDocs] = useState<any[]>([]);

  const fetchUsers = async () => {
    const data: any[] = [];
    const querySnapshot = await getDocs(colRef);

    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        key: doc.id,
      });

      setAllDocs(data);
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUserData = async (key: string) => {
    await deleteDoc(doc(colRef, key));
    window.location.reload();
  };

  return (
    <div className="sm:container  py-12  md:max-w-5xl max-w-xl max-auto ">
      <div className=" text-xl mb-14 md:text-2xl  text-center font-serif tracking-widest ">
        All Users
      </div>
      {allDocs.map((item) => {
        return (
          <>
            <div
              key={item.key}
              className="  container grid grid-cols-3 font-serif mb-5 max-w-4xl m-auto"
            >
              <div className=" text-right ">
                <AccountCircleIcon sx={{ fontSize: 32, marginRight: "20px" }} />
              </div>

              <div className="text-left   md:mr-0 text-md">
                {item.data.fullname}
              </div>
              <div className=" md:text-left  m-auto ">
                <button
                  className=" mr-3 md:mr-6"
                  onClick={() => deleteUserData(item.key)}
                >
                  <DeleteIcon />
                </button>
                <a href={`/user/${item.key}`}>
                  <ArrowForwardIosIcon />
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
