import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { colRef } from "./firebase";
import QRCode from "react-qr-code";
import { useForm } from "react-hook-form";
import { useRequireAuth } from "./context/AuthContext";

type FormData = {
  fullname?: string;
  age?: number;
  number?: number;
  date?: string;
  gender?: string;
  district?: string;
  address?: string;
};

const SinglePage = () => {
  useRequireAuth();
  const [user, setUser] = useState<any>(null);
  const [docId, setDocId] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);

  const { id } = useParams();
  const { register, handleSubmit } = useForm<FormData>();

  useEffect(() => {
    const fetchDocById = async () => {
      const docRef = doc(colRef, id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data().data);
        setDocId(docSnap.id);
      }
    };
    fetchDocById();
  }, [id]);

  const onUpdateHandler = async (data: FormData) => {
    if (!id) return;
    const docRef = doc(colRef, id);
    await updateDoc(docRef, { data });
    setEditMode(false);
    const updatedSnap = await getDoc(docRef);
    if (updatedSnap.exists()) setUser(updatedSnap.data().data);
  };

  if (!user) {
    return (
      <div className="py-36 text-center font-serif text-2xl text-indigo-700 tracking-wide">
        Fetching Member Details...
      </div>
    );
  }

  return (
    <div className=" md:min-h-screen pt-16 py-12 px-2 md:px-8">
      {!editMode ? (
        <>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-center mb-8 text-black tracking-tight drop-shadow">
            Member Profile & QR Access
          </h2>
          {/* Profile & QR Section */}
          <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-2xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* Left: User details */}
            <div className="flex-1 space-y-4 text-base md:text-lg font-medium tracking-wide text-stone-800">
              <div>
                <span className="block text-xs uppercase text-gray-600 font-bold tracking-widest mb-2">
                  Name
                </span>
                <span className="font-serif text-xl text-black">
                  {user.fullname}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs uppercase  text-gray-600 font-bold tracking-widest mb-1">
                    Age
                  </span>
                  <span>{user.age}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase  text-gray-600 font-bold tracking-widest mb-1">
                    Phone
                  </span>
                  <span>{user.number}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase  text-gray-600-bold tracking-widest mb-1">
                    Joined
                  </span>
                  <span>{user.date}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase  text-gray-600 font-bold tracking-widest mb-1">
                    District
                  </span>
                  <span>{user.district}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-xs uppercase  text-gray-600 font-bold tracking-widest mb-1">
                    Address
                  </span>
                  <span>{user.address}</span>
                </div>
              </div>
            </div>
            {/* Right: QR code */}
            <div className="flex flex-col items-center md:items-end md:w-1/3 gap-4">
              <div className="rounded-xl shadow-lg p-4 border border-gray-200 bg-white">
                <QRCode
                  size={160}
                  value={docId || ""}
                  bgColor="#fff"         // White background
                  fgColor="#000"         // Black QR code color
                />
              </div>
              <div className="text-xs text-gray-700 text-center md:text-right font-semibold">
                Scan this QR code at the gym for quick check-in and profile access.
              </div>
              <button
                className=" px-4 py-1.5 text-sm font-semibold rounded tracking-widest  bg-yellow-500 text-white hover:bg-white hover:text-black transition"
                onClick={() => setEditMode(true)}
              >
                EDIT PROFILE
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-center mb-8 text-black tracking-tight">
            Edit Member Details
          </h2>
          {/* Edit Mode */}
          <form
            onSubmit={handleSubmit(onUpdateHandler)}
            className="bg-white shadow-xl rounded-2xl p-6 md:p-10 space-y-6 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="text-gray-500 font-semibold mb-1">
                  Fullname
                </span>
                <input
                  defaultValue={user.fullname}
                  {...register("fullname")}
                  required
                  className="border  border-gray-300  rounded px-3 py-2 focus:ring-2 focus:ring-yellow-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-500 font-semibold mb-1">Age</span>
                <input
                  defaultValue={user.age}
                  {...register("age")}
                  type="number"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-500 font-semibold mb-1">Gender</span>
                <select
                  defaultValue={user.gender}
                  {...register("gender")}
                  className="border border-gray-300 rounded px-3 py-2 bg-white focus:ring-2 focus:ring-yellow-200"
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="text-gray-800font-semibold mb-1">Phone</span>
                <input
                  defaultValue={user.number}
                  {...register("number")}
                  type="tel"
                  required
                  className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-500 font-semibold mb-1">
                  Joining Date
                </span>
                <input
                  defaultValue={user.date}
                  {...register("date")}
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-500 font-semibold mb-1">District</span>
                <input
                  defaultValue={user.district}
                  {...register("district")}
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-200"
                />
              </label>
              <label className="md:col-span-2 flex flex-col">
                <span className="text-gray-500 font-semibold mb-1">Address</span>
                <input
                  defaultValue={user.address}
                  {...register("address")}
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-200"
                />
              </label>
            </div>
            <div className="flex justify-center gap-6 pt-4">
              <button
                type="submit"
                className="px-4 py-1.5 bg-yellow-500 text-white rounded tracking-widest font-semibold hover:bg-white hover:text-black  transition"
              >
                UPDATE
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className=" px-4 py-1.5  bg-white text-black  rounded tracking-widest font-semibold hover:bg-yellow-500 hover:text-white transition"
              >
                CANCEL
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SinglePage;
