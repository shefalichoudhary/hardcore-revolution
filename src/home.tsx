import { useNavigate } from "react-router-dom";
import ServicesCarousel from "./servicesCarousel";
function Home() {

  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="md:min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('../public/Img.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white text-center font-serif px-4 py-32 sm:py-32 md:py-36">
          <h3 className="text-xs sm:text-sm md:text-xl mb-1 sm:mb-2">FUEL YOUR</h3>

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

      {/* Fitness Journey Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Overlapping Images grid with different shapes */}
        <div className="relative w-full md:w-1/2 min-h-[340px] flex items-center justify-center">
          {/* Fitness - Circle */}
          <div className="absolute left-2 top-6 w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white z-30 group">
            <img
              src="/fitness.jpg"
              alt="Fitness"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center">
              <span className="text-white text-base font-bold tracking-wide">Fitness</span>
            </div>
          </div>
          {/* Wellness - Rounded Rectangle */}
          <div className="absolute right-2 top-0 w-40 h-28 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-20 group">
            <img
              src="/wellness.jpg"
              alt="Wellness"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center">
              <span className="text-white text-base font-bold tracking-wide">Wellness</span>
            </div>
          </div>
          {/* Yoga - Square */}
          <div className="absolute left-16 bottom-2 w-28 h-28 rounded-lg overflow-hidden shadow-lg border-4 border-white z-10 group">
            <img
              src="/yoga.jpg"
              alt="Yoga"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center">
              <span className="text-white text-base font-bold tracking-wide">Yoga</span>
            </div>
          </div>
          {/* Swimming - Tall Rectangle */}
          <div className="absolute right-10 bottom-4 w-24 h-36 rounded-3xl overflow-hidden shadow-lg border-4 border-white z-0 group">
            <img
              src="/swimming.jpg"
              alt="Swimming"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center">
              <span className="text-white text-base font-bold tracking-wide">Swimming</span>
            </div>
          </div>
        </div>
        {/* Right: Heading and content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-black mb-4 tracking-tight">
            Fitness Journey
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Embark on your fitness journey with us! Whether you’re into strength training, yoga, swimming, or holistic wellness, our community and facilities are designed to support every step of your transformation. Discover new passions, set goals, and achieve more than you ever thought possible.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Personalized programs for all levels</li>
            <li>Expert trainers and supportive community</li>
            <li>Modern facilities for every activity</li>
            <li>Track your progress and celebrate success</li>
          </ul>
        </div>
      </section>

      <ServicesCarousel />
    </>
  );
}

export default Home;
