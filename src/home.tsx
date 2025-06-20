import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ServicesCarousel from "./servicesCarousel";
function Home() {

  const navigate = useNavigate();

  // Animation for ServicesCarousel
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      // Delay for 400ms before showing
      const timer = setTimeout(() => setShow(true), 400);
      return () => clearTimeout(timer);
    }
  }, [inView]);

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
            className="bg-yellow-500 text-white  px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold rounded shadow hover:bg-gray-200 transition"
            onClick={() => navigate("/UserForm")}
          >
            JOIN NOW
          </button>
        </div>
      </div>

      {/* Fitness Journey Section */}
      <section className="max-w-7xl mx-auto px-2 py-10 sm:px-4 sm:py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Images: 
            - On md+ screens: order-1 (left side)
            - On sm and below: order-2 (after content)
        */}
        <div className="order-2 md:order-1 relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-md lg:max-w-xl flex-shrink-0 min-h-[340px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[600px] flex items-center justify-center overflow-visible">
          {/* Mobile: Overlapping, stylish shapes with more modern style and less overlap */}
          <div className="flex flex-col gap-6 w-full md:hidden relative items-center">
  {/* Fitness */}
  <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-300 via-yellow-100 to-white group transition-all duration-300">
    <img
      src="/fitness.jpg"
      alt="Fitness"
      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center rounded-b-full">
      <span className="text-yellow-200 text-base font-bold tracking-wide drop-shadow">Fitness</span>
    </div>
  </div>

  {/* Wellness */}
  <div className="relative w-40 h-36 rounded-[2rem] overflow-hidden shadow-xl bg-gradient-to-tr from-yellow-200 via-white to-yellow-100 group transition-all duration-300">
    <img
      src="/wellness.jpg"
      alt="Wellness"
      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center rounded-b-2xl">
      <span className="text-yellow-200 text-base font-bold tracking-wide drop-shadow">Wellness</span>
    </div>
  </div>

  {/* Yoga */}
  <div className="relative w-40 h-40 rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-tl from-yellow-100 via-white to-yellow-200 group transition-all duration-300">
    <img
      src="/yoga.jpg"
      alt="Yoga"
      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center rounded-b-[2.5rem]">
      <span className="text-yellow-200 text-base font-bold tracking-wide drop-shadow">Yoga</span>
    </div>
  </div>
</div>

          {/* Desktop: Overlapping advanced layout */}
          <div className="hidden md:block w-full h-full">
            {/* Main Circle (Fitness) */}
            <div className="absolute left-0 top-2 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400 z-30 rotate-3 group transition-all duration-300">
              <img
                src="/fitness.jpg"
                alt="Fitness"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center">
                <span className="text-white text-base xs:text-lg sm:text-xl font-bold tracking-wide drop-shadow">Fitness</span>
              </div>
            </div>
            {/* Rotated Rectangle (Wellness) */}
            <div className="absolute right-0 top-0 w-24 h-20 xs:w-32 xs:h-28 sm:w-36 sm:h-32 md:w-44 md:h-36 lg:w-72 lg:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400 z-20 -rotate-6 group transition-all duration-300">
              <img
                src="/wellness.jpg"
                alt="Wellness"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center">
                <span className="text-white text-base xs:text-lg sm:text-xl font-bold tracking-wide drop-shadow">Wellness</span>
              </div>
            </div>
            {/* Square (Yoga) */}
            <div className="absolute left-8 bottom-2 w-20 h-20 xs:left-16 xs:bottom-4 xs:w-28 xs:h-28 sm:left-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-xl overflow-hidden shadow-lg border-4 border-yellow-400 z-10 group transition-all duration-300">
              <img
                src="/yoga.jpg"
                alt="Yoga"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center">
                <span className="text-white text-base xs:text-lg sm:text-xl font-bold tracking-wide drop-shadow">Yoga</span>
              </div>
            </div>
            {/* Decorative ring for extra style */}
            <div className="absolute left-4 top-10 w-26 h-24 xs:left-10 xs:top-16 xs:w-32 xs:h-32 sm:left-16 sm:top-24 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-full border-2 border-yellow-300 z-0 pointer-events-none animate-pulse"></div>
            {/* Subtle background glow */}
            <div className="absolute inset-0 rounded-full bg-yellow-100 opacity-30 blur-2xl z-0"></div>
          </div>
        </div>
        {/* Content: 
            - On md+ screens: order-2 (right side)
            - On sm and below: order-1 (before images)
        */}
        <div className="order-1 md:order-2 w-full flex-1 flex flex-col justify-center items-start px-2 md:px-8">
          <span className="uppercase text-sm font-bold tracking-widest text-yellow-500 mb-2">
            Your Pathway to Wellness
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-black mb-4 tracking-tight leading-tight">
            Fitness Journey
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-sans">
            Unlock your potential with a holistic approach to health and fitness. Our journey blends <span className="text-yellow-600 font-semibold">strength</span>, <span className="text-yellow-600 font-semibold">mindfulness</span>, and <span className="text-yellow-600 font-semibold">community</span>—empowering you to become your best self.
          </p>

          <div className="space-y-6 w-full">
            <div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Personalized Support</h3>
              <p className="text-gray-600 text-base">
                Get custom programs for every level and goal, plus ongoing guidance and motivation from our expert trainers and community.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Modern Facilities</h3>
              <p className="text-gray-600 text-base">
                Access state-of-the-art equipment, yoga studios and wellness amenities for a balanced fitness experience.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">Track Your Progress</h3>
              <p className="text-gray-600 text-base">
                Celebrate milestones and stay motivated with integrated tools and regular workshops to help you reach your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel with animation */}
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ServicesCarousel />
        </motion.div>
      </div>
    </>
  );
}

export default Home;
