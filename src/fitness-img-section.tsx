import { motion, useAnimation, useInView } from "framer-motion";
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1.05,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
      },
    }),
  };

  const images = [
    { src: "/fitness.jpg", label: "Fitness", rounded: "rounded-full" },
    { src: "/wellness.jpg", label: "Wellness", rounded: "rounded-[2rem]" },
    { src: "/yoga.jpg", label: "Yoga", rounded: "rounded-[2.5rem]" },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-6 w-full md:hidden relative items-center mt-4">
      {images.map((img, i) => (
        <motion.div
          key={img.label}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className={`relative w-44 h-44 ${img.rounded} overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-100 via-white to-yellow-200 group transition-all duration-300`}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/70 py-2 text-center">
            <span className="text-yellow-200 text-base font-bold tracking-wide drop-shadow">
              {img.label}
            </span>
          </div>

          {/* Decorative Square Pulse Style */}
          <div className="absolute inset-0 border-2 border-yellow-300 z-10 pointer-events-none animate-pulse rounded-xl" />
        </motion.div>
      ))}
    </div>
  );
};
export default MobileImages;
