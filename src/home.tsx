import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ServicesCarousel from "./servicesCarousel";
import CheckIcon from '@mui/icons-material/Check';

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

  const fitnessImgRef = useRef(null);
  const fitnessImgInView = useInView(fitnessImgRef, { once: true, margin: "-100px" });

  // Animation variants for mobile images
  const mobileImgVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } }
  });

  return (
    <>
      {/* Hero Section */}
      <div className="md:min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('../public/Img.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white text-center font-serif px-4 py-12 sm:py-16 md:py-20">
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
            className=" px-4 py-1.5 bg-yellow-500 text-white   sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold rounded shadow hover:bg-white hover:text-black transition"
            onClick={() => navigate("/UserForm")}
          >
            JOIN NOW
          </button>
        </div>
      </div>

       {/* Services Carousel with animation */}
      <div ref={ref} className="py-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ServicesCarousel />
        </motion.div>
      </div>

      {/* Fitness Journey Section */}
      <section className="max-w-7xl mx-auto px-2 py-8 sm:px-4 sm:py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Text first on mobile, images after */}
        <div className="order-1 w-full flex-1 flex flex-col justify-center items-start px-2 md:px-8">
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

        {/* Images: Desktop - as before, Mobile - stacked with animation */}
        <div className="order-2 w-full flex-1 flex items-center justify-center relative">
          {/* Desktop: show original layout */}
          <motion.div
            ref={fitnessImgRef}
            initial={{ opacity: 0, x: -80 }}
            animate={fitnessImgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:flex w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-md lg:max-w-xl flex-shrink-0 min-h-[340px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[600px] items-center justify-center relative overflow-visible"
          >
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
            {/* Decorative ring and glow */}
            <div className="absolute left-4 top-10 w-26 h-24 xs:left-10 xs:top-16 xs:w-32 xs:h-32 sm:left-16 sm:top-24 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-full border-2 border-yellow-300 z-0 pointer-events-none animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-yellow-100 opacity-30 blur-2xl z-0"></div>
          </motion.div>

          {/* Mobile: show three images stacked, animated one by one */}
          <div className="flex flex-col gap-6 w-full md:hidden">
            <motion.div
              variants={mobileImgVariants(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400 bg-white"
            >
              <img src="/fitness.jpg" alt="Fitness" className="w-full h-40 object-cover" />
              <div className="bg-black/80 py-2 text-center">
                <span className="text-white text-base font-bold tracking-wide">Fitness</span>
              </div>
            </motion.div>
            <motion.div
              variants={mobileImgVariants(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400 bg-white"
            >
              <img src="/wellness.jpg" alt="Wellness" className="w-full h-40 object-cover" />
              <div className="bg-black/80 py-2 text-center">
                <span className="text-white text-base font-bold tracking-wide">Wellness</span>
              </div>
            </motion.div>
            <motion.div
              variants={mobileImgVariants(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-400 bg-white"
            >
              <img src="/yoga.jpg" alt="Yoga" className="w-full h-40 object-cover" />
              <div className="bg-black/80 py-2 text-center">
                <span className="text-white text-base font-bold tracking-wide">Yoga</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- Pricing Section --- */}
      <section className="py-10 sm:py-12 px-2">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-950 mb-5">Membership Plans</h2>
    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
      Choose the plan that fits your lifestyle. All memberships include unlimited access to our facilities and community events.
    </p>
    <div className="relative flex justify-center">
      {/* Outer rectangle at the bottom, overlapped by cards */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[92%] h-12 bg-yellow-100 rounded-3xl shadow-lg z-0" />
      <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch w-full">
        {/* Basic */}
        <div className="flex-1 max-w-xs bg-white rounded-2xl shadow-xl border-2 border-yellow-500 p-4 sm:p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300 mx-auto">
          <div className="mb-2">
            <span className="inline-block text-yellow-500 text-base font-bold mb-1">Basic</span>
          </div>
          <div className="mb-4">
            <span className="text-2xl font-extrabold text-black">₹999</span>
            <span className="text-sm text-gray-500 font-medium">/mo</span>
          </div>
          <ul className="text-gray-700 mb-5 space-y-2 text-left w-full max-w-xs mx-auto text-sm">
            <li className="flex items-center gap-2"><CheckIcon className="text-yellow-500" fontSize="small" /> Gym Access</li>
            <li className="flex items-center gap-2"><CheckIcon className="text-yellow-500" fontSize="small" /> Group Classes</li>
            <li className="flex items-center gap-2"><CheckIcon className="text-yellow-500" fontSize="small" /> Locker Room</li>
          </ul>
          <button className="w-full py-2 bg-black text-yellow-500 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition text-sm">Join Basic</button>
        </div>
        {/* Premium - Highlighted */}
        <div className="flex-1 max-w-xs bg-yellow-500 border-4 border-black rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col items-center scale-105 z-10 relative hover:scale-110 transition-transform duration-300 mx-auto">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="inline-block bg-black text-yellow-500 px-4 py-1 rounded-full font-bold text-xs shadow-lg">Most Popular</span>
          </div>
          <div className="mb-3 mt-3">
            <span className="inline-block text-black text-base font-bold mb-1">Premium</span>
          </div>
          <div className="mb-4">
            <span className="text-2xl font-extrabold text-white">₹1,999</span>
            <span className="text-sm text-black font-medium">/mo</span>
          </div>
          <ul className="text-white mb-5 space-y-2 text-left w-full max-w-xs mx-auto text-sm">
            <li className="flex items-center gap-2"><CheckIcon className="text-white" fontSize="small" /> All Basic Features</li>
            <li className="flex items-center gap-2"><CheckIcon className="text-white" fontSize="small" /> Personal Trainer</li>
            <li className="flex items-center gap-2"><CheckIcon className="text-white" fontSize="small" /> Spa & Recovery</li>
            <li className="flex items-center gap-2"><CheckIcon className="text-white" fontSize="small" /> Nutrition Plan</li>
          </ul>
          <button className="w-full py-2 bg-black text-yellow-500 rounded-xl font-semibold hover:bg-white hover:text-black transition text-sm shadow-lg">Join Premium</button>
        </div>
        {/* Family */}
        <div className="flex-1 max-w-xs bg-gray-900 rounded-2xl shadow-xl border-2 border-yellow-500 p-4 sm:p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300 mx-auto">
          <div className="mb-2">
            <span className="inline-block text-yellow-500 text-base font-bold mb-1">Family</span>
          </div>
          <div className="mb-4">
            <span className="text-2xl font-extrabold text-white">₹2,999</span>
            <span className="text-sm text-gray-300 font-medium">/mo</span>
          </div>
          <ul className="text-white mb-5 space-y-2 text-left w-full max-w-xs mx-auto text-sm">
            <li className="flex items-center gap-2"><CheckIcon className="text-yellow-500" fontSize="small" /> All Premium Features</li>
            <li className="flex items-center gap-2"><CheckIcon className="text-yellow-500" fontSize="small" /> 4 Family Members</li>
            <li className="flex items-center gap-2"><CheckIcon className="text-yellow-500" fontSize="small" /> Kids Zone</li>
          </ul>
          <button className="w-full py-2 bg-yellow-500 text-black rounded-xl font-semibold hover:bg-white hover:text-yellow-500 transition text-sm">Join Family</button>
        </div>
      </div>
    </div>
  </div>
</section>
     

      {/* --- Testimonials Section --- */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white py-10 sm:py-14 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-900 mb-8">What Our Members Say</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
              <p className="text-md text-gray-700 mb-4">“The trainers here are amazing and the community is so supportive. I’ve never felt more motivated!”</p>
              <div className="flex items-center justify-center gap-3">
                <span className="font-bold text-yellow-500">Priya S.</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
              <p className="text-md text-gray-700 mb-4">“The facilities are top-notch and I love the variety of classes. Highly recommend!”</p>
              <div className="flex items-center justify-center gap-3">
                <span className="font-bold text-yellow-500">Rahul M.</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
              <p className="text-md text-gray-700 mb-4">“Joining changed my life. I feel healthier, stronger, and happier every day!”</p>
              <div className="flex items-center justify-center gap-3">
                <span className="font-bold text-yellow-500">Anjali K.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

     

     
    </>
  );
}

export default Home;
