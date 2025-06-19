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
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const services = [
	{
		title: "Personal Training",
		icon: <FitnessCenterIcon fontSize="large" className="text-indigo-600" />,
		desc: "Get 1-on-1 expert coaching tailored to your unique fitness goals. Our trainers provide custom workout plans, progress tracking, and ongoing motivation to help you achieve your best self.",
	},
	{
		title: "Spa & Recovery",
		icon: <SpaIcon fontSize="large" className="text-pink-500" />,
		desc: "Relax and rejuvenate with our modern spa, massage therapy, sauna, steam room, and cryotherapy. The perfect way to recover after intense workouts.",
	},
	{
		title: "Group Classes",
		icon: <GroupIcon fontSize="large" className="text-green-600" />,
		desc: "Join energetic group classes like Zumba, HIIT, and CrossFit. All levels welcome! Enjoy a fun, social environment with certified instructors and daily new classes.",
	},
	{
		title: "Nutrition & Diet",
		icon: <RestaurantIcon fontSize="large" className="text-orange-500" />,
		desc: "Personalized meal plans, nutrition coaching, and healthy recipes for every lifestyle. Our dieticians support you with macro tracking and weekly meal guides.",
	},
	{
		title: "Workout Programs",
		icon: <AssignmentIcon fontSize="large" className="text-blue-500" />,
		desc: "Structured programs for muscle gain, fat loss, or endurance. Track your progress with our app and follow video tutorials from beginner to advanced.",
	},
	{
		title: "Yoga & Meditation",
		icon: <SelfImprovementIcon fontSize="large" className="text-purple-600" />,
		desc: "Balance mind and body with guided yoga, meditation, and mindfulness sessions. Enjoy peaceful studios and certified yoga trainers.",
	},
	{
		title: "Hydration Bar",
		icon: <LocalDrinkIcon fontSize="large" className="text-cyan-500" />,
		desc: "Stay refreshed with our hydration bar: protein shakes, smoothies, and electrolyte drinks. Perfect for post-workout recovery.",
	},
	{
		title: "Running Club",
		icon: <DirectionsRunIcon fontSize="large" className="text-red-500" />,
		desc: "Join our weekly running club for all levels, with coaching, pace groups, and monthly challenges. Enjoy both outdoor and treadmill runs.",
	},
];

function ServicesCarousel() {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	return (
		<section className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-20 px-4 font-sans">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-800 mb-4 tracking-tight drop-shadow-lg font-serif">
					Our Trending Services
				</h2>
				<p className="text-center text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-light">
					Discover the latest in fitness, wellness, and community. Our services
					are designed to help you achieve your goals in a supportive, innovative
					environments.
				</p>

				<div className="relative">
					<Swiper
						modules={[Pagination, Navigation]}
						spaceBetween={24}
						slidesPerView={1}
						breakpoints={{
							640: { slidesPerView: 1 },
							900: { slidesPerView: 2 },
							1280: { slidesPerView: 3 },
						}}
						pagination={{ clickable: true }}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						onInit={(swiper: SwiperType) => {
							if (swiper.params.navigation) {
								(swiper.params.navigation as any).prevEl = prevRef.current;
								(swiper.params.navigation as any).nextEl = nextRef.current;
							}
							swiper.navigation.init();
							swiper.navigation.update();
						}}
						className="pb-16"
					>
						{services.map((service, index) => (
							<SwiperSlide key={index}>
								<div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-100 
                  p-4 sm:p-6 md:p-8 mx-1 sm:mx-2 my-4 flex flex-col items-center 
                  transition-transform hover:scale-105 hover:shadow-indigo-200 duration-300 
                  min-h-[260px] sm:min-h-[300px] md:min-h-[340px]">
									<div className="mb-4 bg-gradient-to-br from-indigo-100 to-pink-100 rounded-full p-4 shadow-lg">
										{service.icon}
									</div>
									<h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-800 font-serif tracking-wide text-center">
										{service.title}
									</h3>
									<p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 text-center font-normal leading-relaxed">
										{service.desc}
									</p>
								</div>
							</SwiperSlide>
						))}
						{/* Custom navigation arrows */}
						<button
							ref={prevRef}
							className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 border border-indigo-200 rounded-full p-2 sm:p-3 shadow hover:bg-indigo-100 transition hidden sm:flex items-center justify-center"
							aria-label="Previous"
						>
							<svg className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
						</button>
						<button
							ref={nextRef}
							className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 border border-pink-200 rounded-full p-2 sm:p-3 shadow hover:bg-pink-100 transition hidden sm:flex items-center justify-center"
							aria-label="Next"
						>
							<svg className="w-7 h-7 sm:w-8 sm:h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</Swiper>
				</div>
			</div>
			{/* Decorative gradient blur */}
			<div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
			<div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-200 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
		</section>
	);
}

export default ServicesCarousel;
