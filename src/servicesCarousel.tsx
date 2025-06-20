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
		icon: <FitnessCenterIcon fontSize="large" className="text-white" />,
		desc: "Get 1-on-1 expert coaching tailored to your unique fitness goals. Our trainers provide custom workout plans and ongoing motivation to help you achieve your best self.",
	},
	{
		title: "Spa & Recovery",
		icon: <SpaIcon fontSize="large" className="text-yellow-500" />,
		desc: "Relax and rejuvenate with our modern spa, massage therapy, sauna, steam room, and cryotherapy. The perfect way to recover after intense workouts.",
	},
	{
		title: "Group Classes",
		icon: <GroupIcon fontSize="large" className="text-white" />,
		desc: "Join energetic group classes like Zumba, HIIT, and CrossFit. All levels welcome! Enjoy a fun, social environment with certified instructors and daily new classes.",
	},
	{
		title: "Nutrition & Diet",
		icon: <RestaurantIcon fontSize="large" className="text-yellow-500" />,
		desc: "Personalized meal plans, nutrition coaching, and healthy recipes for every lifestyle. Our dieticians support you with macro tracking and weekly meal guides.",
	},
	{
		title: "Workout Programs",
		icon: <AssignmentIcon fontSize="large" className="text-white" />,
		desc: "Structured programs for muscle gain, fat loss, or endurance. Track your progress with our app and follow video tutorials from beginner to advanced.",
	},
	{
		title: "Yoga & Meditation",
		icon: <SelfImprovementIcon fontSize="large" className="text-yellow-500" />,
		desc: "Balance mind and body with guided yoga, meditation, and mindfulness sessions. Enjoy peaceful studios and certified yoga trainers.",
	},
	
	{
        title: "Running & Cardio",
        icon: <DirectionsRunIcon fontSize="large" className="text-white" />,
        desc: "Join our running club, cardio classes, and outdoor bootcamps. Perfect for all levels, from beginners to marathon runners.",
    },
    {
        title: "Hydration Stations",
        icon: <LocalDrinkIcon fontSize="large" className="text-yellow-500" />,
        desc: "Stay hydrated with our water stations, electrolyte drinks, and smoothie bars. Fuel your workouts with healthy hydration options.",
    },
];

function ServicesCarousel() {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	return (
		<section className="relative  py-14 px-4 font-sans">
			<div className="max-w-7xl mx-auto">
				<h2 className=" text-black text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight drop-shadow-lg font-serif">
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
								<div className="bg-white rounded-3xl shadow-xl border border-gray-200
                  p-3 sm:p-4 md:p-6 mx-1 sm:mx-2 my-3 flex flex-col items-center
                  transition-transform hover:scale-105 hover:shadow-black/20 duration-300
                  min-h-[200px] sm:min-h-[240px] md:min-h-[260px]">
									<div className="mb-3 bg-black rounded-full p-4 shadow flex items-center justify-center">
										{/* Make icon larger and more visible */}
										{service.icon}
									</div>
									<h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-black font-serif tracking-wide text-center">
										{service.title}
									</h3>
									<p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 text-center font-normal leading-relaxed">
										{service.desc}
									</p>
								</div>
							</SwiperSlide>
						))}
						{/* Custom navigation arrows */}
						<button
							ref={prevRef}
							className="absolute left-2 top-1/2 -translate-y-1/2 z-20   rounded-full p-2 sm:p-3 shadow hover:bg-yellow-300 transition hidden sm:flex items-center justify-center"
							aria-label="Previous"
						>
							<svg className="w-7 h-7 sm:w-8 sm:h-8 text-black hover:text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
						</button>
						<button
							ref={nextRef}
							className="absolute right-2 top-1/2 -translate-y-1/2 z-20   rounded-full p-2 sm:p-3 shadow hover:bg-yellow-300 transition hidden sm:flex items-center justify-center"
							aria-label="Next"
						>
							<svg className="w-7 h-7 sm:w-8 sm:h-8 text-black hover:text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</Swiper>
				</div>
			</div>
			
		</section>
	);
}

export default ServicesCarousel;
