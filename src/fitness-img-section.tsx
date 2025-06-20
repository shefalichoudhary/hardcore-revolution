import { motion, useAnimation, useInView, easeOut } from "framer-motion";
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

  // Animation: 3D effect, no overlap, shadow, and ring for each image
  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92, rotateY: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1.08,
      rotateY: 0,
      transition: {
        delay: i * 0.18,
        duration: 0.5,
        ease: easeOut,
      },
    }),
  };

  const images = [
    { src: "/fitness.jpg", label: "Fitness", rounded: "rounded-full", ring: "ring-yellow-300", shadow: "shadow-2xl" },
    { src: "/wellness.jpg", label: "Wellness", rounded: "rounded-[2rem]", ring: "ring-yellow-200", shadow: "shadow-xl" },
    { src: "/yoga.jpg", label: "Yoga", rounded: "rounded-[2.5rem]", ring: "ring-yellow-100", shadow: "shadow-xl" },
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col gap-8 w-full md:hidden relative items-center mt-4 min-h-[340px]"
    >
      {images.map((img, i) => (
        <motion.div
          key={img.label}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className={`
            relative w-56 h-56 bg-white ${img.rounded} overflow-hidden
            ${img.shadow} ring-8 ${img.ring} flex flex-col items-center justify-end
            group transition-all duration-300
          `}
          style={{
            perspective: "800px",
            boxShadow:
              "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 6px 0 rgba(255, 215, 0, 0.12)",
            background:
              "linear-gradient(135deg, #fffbe6 0%, #fdf6e3 100%)",
          }}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
            style={{
              filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))",
              borderRadius: "inherit",
            }}
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/60 py-2 text-center backdrop-blur-sm">
            <span className="text-yellow-200 text-lg font-bold tracking-wide drop-shadow">
              {img.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default MobileImages;
