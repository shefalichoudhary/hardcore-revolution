import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" min-h-full relative bg-cover bg-center bg-no-repeat bg-[url('../public/Img.jpg')] ">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0 "></div>

      {/* Content */}
     <div className="relative z-10 text-blue text-center font-serif px-4 py-32 sm:py-32 md:py-36">
        <h3 className="text-xs sm:text-sm md:text-xl mb-1 sm:mb-2">
          FUEL YOUR
        </h3>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-widest mb-3 sm:mb-6">
          BODY FITNESS
        </h1>

        <p className="text-xs sm:text-sm md:text-base max-w-md sm:max-w-xl mx-auto mb-4 sm:mb-6 leading-relaxed">
          When we created Gym Base, we aimed to be more than just a typical gym.
          <br className="hidden sm:block" />
          With experience in traditional fitness spaces, we built something better.
        </p>

        <button
          className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold rounded shadow hover:bg-gray-200 transition"
          onClick={() => navigate("/UserForm")}
        >
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default Home;
