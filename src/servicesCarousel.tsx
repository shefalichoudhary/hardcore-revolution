import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SpaIcon from "@mui/icons-material/Spa";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import GroupIcon from "@mui/icons-material/Group";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

const services = [
  {
    title: "Personal Training",
    icon: <FitnessCenterIcon fontSize="large" className="text-indigo-500" />,
    desc: "1-on-1 expert coaching tailored to your unique fitness goals, with progress tracking and motivation.",
    features: [
      "Custom workout plans",
      "Progress monitoring",
      "Flexible scheduling",
    ],
  },
  {
    title: "Spa & Recovery",
    icon: <SpaIcon fontSize="large" className="text-pink-400" />,
    desc: "Relax and rejuvenate with our modern spa, massage therapy, and recovery lounge.",
    features: [
      "Deep tissue massage",
      "Sauna & steam room",
      "Cryotherapy",
    ],
  },
  {
    title: "Group Classes",
    icon: <GroupIcon fontSize="large" className="text-green-500" />,
    desc: "Join our energetic group classes: Zumba, HIIT, CrossFit, and more. All levels welcome!",
    features: [
      "Certified instructors",
      "Fun & social environment",
      "Daily new classes",
    ],
  },
  {
    title: "Nutrition & Diet",
    icon: <RestaurantIcon fontSize="large" className="text-orange-400" />,
    desc: "Personalized meal plans, nutrition coaching, and healthy recipes for every lifestyle.",
    features: [
      "Macro tracking",
      "Dietician support",
      "Weekly meal guides",
    ],
  },
  {
    title: "Workout Programs",
    icon: <AssignmentIcon fontSize="large" className="text-blue-400" />,
    desc: "Structured programs for muscle gain, fat loss, or endurance, with app-based tracking.",
    features: [
      "Beginner to advanced",
      "App integration",
      "Video tutorials",
    ],
  },
  {
    title: "Yoga & Meditation",
    icon: <SelfImprovementIcon fontSize="large" className="text-purple-500" />,
    desc: "Balance mind and body with guided yoga, meditation, and mindfulness sessions.",
    features: [
      "Morning & evening classes",
      "Certified yoga trainers",
      "Peaceful studio",
    ],
  },
  {
    title: "Hydration Bar",
    icon: <LocalDrinkIcon fontSize="large" className="text-cyan-400" />,
    desc: "Stay refreshed with our hydration bar: protein shakes, smoothies, and electrolyte drinks.",
    features: [
      "Custom blends",
      "Post-workout recovery",
      "Fresh ingredients",
    ],
  },
  {
    title: "Running Club",
    icon: <DirectionsRunIcon fontSize="large" className="text-red-400" />,
    desc: "Join our weekly running club for all levels, with coaching and community events.",
    features: [
      "Outdoor & treadmill runs",
      "Pace groups",
      "Monthly challenges",
    ],
  },
];

function ServicesCarousel() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4 tracking-tight drop-shadow-lg">
          Our Trending Services
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the latest in fitness, wellness, and community. Our services are designed to help you achieve your goals in a supportive, innovative environment.
        </p>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 p-8 mx-2 my-4 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-indigo-200 duration-300 min-h-[420px]">
                <div className="mb-4 bg-gradient-to-br from-indigo-100 to-pink-100 rounded-full p-4 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-base mb-4 text-center">{service.desc}</p>
                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-indigo-600 hover:to-pink-600 transition">
                  Learn More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Decorative gradient blur */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-200 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
    </section>
  );
}

export default ServicesCarousel;
