import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { colRef } from "./firebase";
import QRCode from "react-qr-code";
import { useForm } from "react-hook-form";
type FormData = {
  fullname?: string | undefined;
  age?: number | undefined;
  number?: number | undefined;
  date?: number | undefined;
  gender?: string | undefined;

  district?: string | undefined;
  address?: string | undefined;
};
const SinglePage = (cleintForm: FormData) => {
  const [user, setUser] = useState<null | any>(null);

  const [docId, setDocId] = useState<null | any>(null);
  const [mode, setMode] = useState(true);

  const { id } = useParams();
  const { register, handleSubmit } = useForm<FormData>();
  useEffect(() => {
    const fetchDocById = async () => {
      const docRef = doc(colRef, id);
      setDocId(docRef.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data().data);
      }
    };
    fetchDocById();
  }, []);
  const onEditHandler = () => {
    setMode(false);
  };

  const onCancleHandler = () => {
    setMode(true);
  };
  const onUpdateHandler = async (data: FormData) => {
    const docRef = doc(colRef, id);
    await updateDoc(docRef, {
      data,
    });
    window.location.reload();
  };

  if (user === null) {
    return (
      <>
        <div className="bg-white py-36">
          <h2 className="text-center my-12 font-serif text-2xl">
            Fetching User Details...
          </h2>
        </div>
      </>
    );
  }
  if (mode === true) {
    return (
      <>
        <div className="container py-20 md:m-auto md:max-w-2xl md:py-26 tracking-wide ">
          <div className="mx-28 md:mx-12 font-serif  ">
            <div className=" m-auto grid grid-cols-1  text-lg gap-4">
              <div>
                <span className="mr-3">Name :</span>

                <span> {user.fullname}</span>
              </div>
              <div>
                <span className="mr-3"> Age :</span>
                {user.age}
              </div>
              <div>
                <span className="mr-3">Number :</span>
                {user.number}
              </div>
              <div>
                <span className="mr-3"> Joining date : </span>
                {user.date}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 max-w-xs mx-16 md:mx-0 md:mt-5 mt-7">
            <div className="my-auto mx-auto">
              {" "}
              <QRCode size={70} value={docId} viewBox={`0 0 256 256`} />
              <div id="reader"></div>
            </div>
            <div>
              <button
                className="  text-sm font-normal mt-2  rounded tracking-widest px-9 py-4 md:my-5 bg-stone-900 text-white "
                onClick={() => onEditHandler()}
              >
                EDIT
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container max-w-sm  md:max-w-2xl m-auto py-12 ">
      <form onSubmit={handleSubmit(onUpdateHandler)} autoComplete="off">
        <div className="font-light text-2xl my-3  text-center tracking-widest">
          EDIT YOUR DETAILS
        </div>
        <div className="grid  md:grid-cols-2 pt-7 gap-4 ">
          <label>
            <span className="text-gray-700">Fullname</span>
            <input
              defaultValue={user.fullname}
              type="text"
              className="
            form-input
             w-full
            border
            capitalize ...
            border-slate-300
                    rounded
                    mt-1
                     px-3
                    py-3"
              required
              {...register("fullname")}
            ></input>
          </label>
          <label>
            <span className="text-gray-700">Age</span>
            <input
              defaultValue={user.age}
              type="text"
              className="
            form-input
             w-full
            border
            capitalize ...
            border-slate-300
                    rounded
                    mt-1
                     px-3
                    py-3"
              required
              {...register("age")}
            ></input>
          </label>
          <label>
            <span className="text-gray-700">Gender</span>
            <select
              defaultValue={user.gender}
              className="
              
            form-input
            border
            w-full
            capitalize ...
            border-slate-300
            bg-white
                    rounded
                    mt-1
                     px-3
                    py-3"
              {...register("gender")}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>
          <label>
            <span className="text-gray-700">Number</span>
            <input
              defaultValue={user.number}
              type="text"
              className="
            form-input
             w-full
            border
            capitalize ...
            border-slate-300
                    rounded
                    mt-1
                     px-3
                    py-3"
              required
              {...register("number")}
            ></input>
          </label>
          <label>
            <span className="text-gray-700">Date</span>
            <input
              defaultValue={user.date}
              className="
            border
             w-full
            border-slate-300
                    rounded
                    mt-1
                     px-3
                    py-3"
              {...register("date")}
            ></input>
          </label>

          <label>
            <span className="text-gray-700">District</span>
            <input
              defaultValue={user.district}
              type="text"
              className="
            form-input
             w-full
            border
            capitalize ...
            border-slate-300
                    rounded
                    mt-1
                     px-3
                    py-3"
              {...register("district")}
            ></input>
          </label>
          <label className="md:col-span-2">
            <span className="text-gray-700">Address</span>
            <input
              defaultValue={user.address}
              type="text"
              className="
            form-input
            border
             w-full
            capitalize ...
            border-slate-300
                    rounded
                    mt-1
                     px-3
                    py-3"
              {...register("address")}
            />
          </label>
        </div>
        <div>
          <div className="grid grid-cols-2 max-w-xs ">
            <div>
              <button
                type="submit"
                className="text-sm mb-8 font-normal mt-4  rounded tracking-widest px-9 py-4 md:my-5 bg-stone-900 text-white "
              >
                UPDATE
              </button>
            </div>
            <div>
              <button
                className=" text-sm mb-8 font-normal mt-4  rounded tracking-widest px-9 py-4 md:my-5 bg-stone-900 text-white "
                onClick={() => onCancleHandler()}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SinglePage;
