import { motion, useAnimation, useInView ,easeOut} from "framer-motion";
import { useRef, useEffect } from "react";

const MobileImages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation: faster, more natural, no border, no background, one ring behind all
  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1.12,
      transition: {
        delay: i * 0.15,
        duration: 0.45,
        ease: easeOut,
      },
    }),
  };

  const images = [
    { src: "/fitness.jpg", label: "Fitness", rounded: "rounded-full", z: "z-30" },
    { src: "/wellness.jpg", label: "Wellness", rounded: "rounded-[2rem]", z: "z-40" },
    { src: "/yoga.jpg", label: "Yoga", rounded: "rounded-[2.5rem]", z: "z-50" },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-0 w-full md:hidden relative items-center mt-4 min-h-[340px]">
      {/* Decorative ring behind all images */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-4 border-yellow-300 opacity-60 z-10 pointer-events-none animate-pulse"></div>
      {/* Images, overlapping and bigger */}
      <div className="flex flex-col gap-0 w-full items-center relative z-20">
        <motion.div
          custom={0}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl bg-white group transition-all duration-300"
          style={{ marginBottom: "-2.5rem" }}
        >
          <img
            src="/fitness.jpg"
            alt="Fitness"
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center rounded-b-full">
            <span className="text-yellow-200 text-lg font-bold tracking-wide drop-shadow">
              Fitness
            </span>
          </div>
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="relative w-52 h-48 rounded-[2rem] overflow-hidden shadow-2xl bg-white group transition-all duration-300"
          style={{ marginBottom: "-2.5rem" }}
        >
          <img
            src="/wellness.jpg"
            alt="Wellness"
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center rounded-b-[2rem]">
            <span className="text-yellow-200 text-lg font-bold tracking-wide drop-shadow">
              Wellness
            </span>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="relative w-56 h-56 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white group transition-all duration-300"
        >
          <img
            src="/yoga.jpg"
            alt="Yoga"
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center rounded-b-[2.5rem]">
            <span className="text-yellow-200 text-lg font-bold tracking-wide drop-shadow">
              Yoga
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default MobileImages;
