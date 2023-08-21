import * as React from "react";
import { addDoc } from "firebase/firestore";

import { useForm } from "react-hook-form";
import { colRef } from "../firebase";

type FormData = {
  fullname?: string | undefined;
  age?: number | undefined;
  gender?: string | undefined;
  number?: number | undefined;
  date?: number | undefined;
  district?: string | undefined;
  address?: string | undefined;
};

export default function UserForm(user: FormData) {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: user,
  });

  const onSubmit = (data: FormData) => {
    addDoc(colRef, { data });
    reset();
  };

  let currentDate = new Date().toLocaleDateString();

  return (
    <div className="container max-w-sm  md:max-w-2xl m-auto py-20  ">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="font-light text-2xl my-3  text-center tracking-widest">
          Fill Your Details
        </div>
        <div className="grid  md:grid-cols-2 pt-7 gap-4 ">
          <label>
            <span className="text-gray-700">Fullname</span>
            <input
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
              {...register("age")}
            ></input>
          </label>

          <label>
            <span className="text-gray-700">Gender</span>
            <select
              className="
              
            form-input
            border
            w-full
            border-slate-300
            bg-white
                    rounded
                    mt-1
                     px-3
                    py-3"
              {...register("gender")}
            >
              <option value="">Select your gender</option>

              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>

          <label>
            <span className="text-gray-700">Number</span>
            <input
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
              {...register("date")}
              value={currentDate}
            ></input>
          </label>
          <label>
            <span className="text-gray-700">District</span>
            <input
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
          <button
            className="px-6 py-3  text-sm mb-8 font-normal mt-4  rounded tracking-widest md:px-9 md:py-4 md:my-5 bg-stone-900 text-white "
            type="submit"
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
