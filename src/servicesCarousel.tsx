import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const services = [
  { title: "Personal Trainer", icon: "💪", desc: "1-on-1 expert coaching tailored to you." },
  { title: "Massage Room", icon: "💆", desc: "Relax and recover in our dedicated room." },
  { title: "Zumba Classes", icon: "💃", desc: "Fun & energetic group dance workouts." },
  { title: "Nutrition Guide", icon: "🥗", desc: "Custom meal plans & healthy habits." },
  { title: "Workout Plans", icon: "🏋️", desc: "Structured programs to hit your goals." },
  { title: "Yoga & Meditation", icon: "🧘", desc: "Balance your mind and body together." },
];

function ServicesCarousel() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="pb-8"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-2xl text-center h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ServicesCarousel;
