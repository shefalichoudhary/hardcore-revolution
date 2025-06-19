import { addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { colRef } from "../firebase";

type FormData = {
  fullname?: string;
  age?: number;
  gender?: string;
  number?: number;
  date?: string;
  district?: string;
  address?: string;
};

export default function UserForm(user: FormData) {

  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: user,
  });

  const onSubmit = async (data: FormData) => {
    await addDoc(colRef, { data });
    reset();
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 tracking-wide">
          Fill Your Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fullname */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fullname
            </label>
            <input
              type="text"
              required
              {...register("fullname")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-700"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              {...register("age")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-700"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              {...register("gender")}
              className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-stone-700"
            >
              <option value="">Select your gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              {...register("number")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-700"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="text"
              value={currentDate}
              readOnly
              {...register("date")}
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <input
              type="text"
              {...register("district")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-700"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              {...register("address")}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-700 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-stone-900 text-white font-medium rounded shadow-md hover:bg-stone-800 transition duration-300 tracking-widest"
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
