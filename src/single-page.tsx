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
      <div className="py-36 text-center font-serif text-2xl">
        Fetching User Details...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {!editMode ? (
       <>
  <h2 className="text-2xl font-semibold font-serif mb-6 text-center">
    User Details
  </h2>

  <div className="bg-white shadow-md rounded-xl p-6 md:flex md:justify-between md:items-start space-y-6 md:space-y-0">
    {/* Left: User details */}
    <div className="space-y-3 text-lg font-medium tracking-wide">
      <p><span className="font-semibold">Name:</span> {user.fullname}</p>
      <p><span className="font-semibold">Age:</span> {user.age}</p>
      <p><span className="font-semibold">Number:</span> {user.number}</p>
      <p><span className="font-semibold">Joining Date:</span> {user.date}</p>
      <p><span className="font-semibold">Gender:</span> {user.gender}</p>
      <p><span className="font-semibold">District:</span> {user.district}</p>
      <p><span className="font-semibold">Address:</span> {user.address}</p>
    </div>

    {/* Right: QR code */}
    <div className="flex flex-col items-left  md:items-end md:w-1/3 pt-6 space-y-4">

  <QRCode size={180} value={docId || ""} />
    <button
    className="text-sm font-normal rounded tracking-widest px-6 py-2  bg-stone-900 text-white hover:bg-stone-800"
    onClick={() => setEditMode(true)}
  >
    EDIT
  </button>
</div>

  </div>

 
</>

      ) : (
        <>
          <h2 className="text-2xl font-semibold font-serif text-center mb-6">
            Edit Your Details
          </h2>
          <form
            onSubmit={handleSubmit(onUpdateHandler)}
            className="bg-white shadow-md rounded-xl p-6 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-gray-700">Fullname</span>
                <input
                  defaultValue={user.fullname}
                  {...register("fullname")}
                  required
                  className="border border-slate-300 rounded px-3 py-2"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Age</span>
                <input
                  defaultValue={user.age}
                  {...register("age")}
                  type="number"
                  required
                  className="border border-slate-300 rounded px-3 py-2"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Gender</span>
                <select
                  defaultValue={user.gender}
                  {...register("gender")}
                  className="border border-slate-300 rounded px-3 py-2 bg-white"
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Number</span>
                <input
                  defaultValue={user.number}
                  {...register("number")}
                  type="tel"
                  required
                  className="border border-slate-300 rounded px-3 py-2"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Joining Date</span>
                <input
                  defaultValue={user.date}
                  {...register("date")}
                  type="text"
                  className="border border-slate-300 rounded px-3 py-2"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">District</span>
                <input
                  defaultValue={user.district}
                  {...register("district")}
                  type="text"
                  className="border border-slate-300 rounded px-3 py-2"
                />
              </label>
              <label className="md:col-span-2 flex flex-col">
                <span className="text-gray-700">Address</span>
                <input
                  defaultValue={user.address}
                  {...register("address")}
                  type="text"
                  className="border border-slate-300 rounded px-3 py-2"
                />
              </label>
            </div>

            <div className="flex justify-center gap-6 pt-4">
              <button
                type="submit"
                className="bg-stone-900 text-white px-6 py-3 rounded tracking-widest hover:bg-stone-800"
              >
                UPDATE
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-300 text-gray-800 px-6 py-3 rounded tracking-widest hover:bg-gray-400"
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
