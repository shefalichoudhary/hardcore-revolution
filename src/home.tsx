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
        {/* Left: Advanced Overlapping Images with Shapes */}
        <div className="relative w-full md:w-1/2 min-h-[340px] flex items-center justify-center">
          {/* Main Circle (Fitness) */}
          <div className="absolute left-8 top-10 w-36 h-36 rounded-full overflow-hidden shadow-2xl border-4 border-white z-30 rotate-3 group">
            <img
              src="/fitness.jpg"
              alt="Fitness"
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center">
              <span className="text-white text-base font-bold tracking-wide">Fitness</span>
            </div>
          </div>
          {/* Rotated Rectangle (Wellness) */}
          <div className="absolute right-0 top-0 w-40 h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 -rotate-6 group">
            <img
              src="/wellness.jpg"
              alt="Wellness"
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center">
              <span className="text-white text-base font-bold tracking-wide">Wellness</span>
            </div>
          </div>
          {/* Square (Yoga) */}
          <div className="absolute left-24 bottom-4 w-28 h-28 rounded-xl overflow-hidden shadow-lg border-4 border-white z-10 group">
            <img
              src="/yoga.jpg"
              alt="Yoga"
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center">
              <span className="text-white text-base font-bold tracking-wide">Yoga</span>
            </div>
          </div>
          {/* Tall Rectangle (Swimming) */}
          <div className="absolute right-10 bottom-2 w-24 h-36 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-0 rotate-2 group">
            <img
              src="/swimming.jpg"
              alt="Swimming"
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center">
              <span className="text-white text-base font-bold tracking-wide">Swimming</span>
            </div>
          </div>
          {/* Decorative ring for extra style */}
          <div className="absolute left-20 top-24 w-44 h-44 rounded-full border-2 border-gray-200 z-0"></div>
        </div>
        {/* Right: Heading and content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-2 md:px-8">
          <span className="uppercase text-sm font-bold tracking-widest text-yellow-500 mb-2">
            Your Pathway to Wellness
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-black mb-4 tracking-tight leading-tight">
            Fitness Journey
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-sans">
            Unlock your potential with a holistic approach to health and fitness. Our journey blends <span className="text-yellow-600 font-semibold">strength</span>, <span className="text-yellow-600 font-semibold">mindfulness</span>, and <span className="text-yellow-600 font-semibold">community</span>—empowering you to become your best self.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Feature 1 */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 shadow hover:shadow-yellow-200 transition">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 text-2xl font-bold shadow">
                🏋️
              </span>
              <div>
                <div className="font-semibold text-gray-900">Personalized Programs</div>
                <div className="text-sm text-gray-500">For every level and goal</div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 shadow hover:shadow-yellow-200 transition">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 text-2xl font-bold shadow">
                🤝
              </span>
              <div>
                <div className="font-semibold text-gray-900">Supportive Community</div>
                <div className="text-sm text-gray-500">Expert trainers & friends</div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 shadow hover:shadow-yellow-200 transition">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 text-2xl font-bold shadow">
                🏊
              </span>
              <div>
                <div className="font-semibold text-gray-900">Modern Facilities</div>
                <div className="text-sm text-gray-500">Yoga, swimming, and more</div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 shadow hover:shadow-yellow-200 transition">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 text-2xl font-bold shadow">
                📈
              </span>
              <div>
                <div className="font-semibold text-gray-900">Track Progress</div>
                <div className="text-sm text-gray-500">Celebrate every milestone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCarousel />
    </>
  );
}

export default Home;
