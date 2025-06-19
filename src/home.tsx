import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="md:min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('../public/Img.jpg')]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Main Flex Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-white font-serif px-4 py-20 md:py-32 gap-10 md:gap-16">
        {/* Hero Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="text-xs sm:text-sm md:text-xl mb-1 sm:mb-2">FUEL YOUR</h3>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-widest mb-3 sm:mb-6">
            BODY FITNESS
          </h1>

          <p className="text-xs sm:text-sm md:text-base max-w-md sm:max-w-xl mb-4 sm:mb-6 leading-relaxed mx-auto md:mx-0">
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

       {/* Services Section */}
<div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
  {[
    { title: "Personal Trainer", icon: "💪", desc: "1-on-1 expert coaching tailored to you." },
    { title: "Massage Room", icon: "💆", desc: "Relax and recover in our dedicated room." },
    { title: "Zumba Classes", icon: "💃", desc: "Fun & energetic group dance workouts." },
    { title: "Nutrition Guide", icon: "🥗", desc: "Custom meal plans & healthy habits." },
    { title: "Workout Plans", icon: "🏋️", desc: "Structured programs to hit your goals." },
    { title: "Yoga & Meditation", icon: "🧘", desc: "Balance your mind and body together." },
  ].map((service, index) => (
    <div
      key={index}
      className="bg-white bg-opacity-10 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl border border-white border-opacity-20 transition transform hover:scale-105 hover:shadow-2xl hover:border-opacity-40"
      style={{
        boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="text-4xl mb-3">{service.icon}</div>
      <h3 className="text-lg font-bold mb-1">{service.title}</h3>
      <p className="text-sm opacity-80">{service.desc}</p>
    </div>
  ))}
</div>
</div>


    </div>
  );
}

export default Home;
