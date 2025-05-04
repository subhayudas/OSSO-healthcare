import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ManagementCardProps {
  name: string;
  description: string;
  position: string;
  image: string;
  animationState: string;
  delay?: number;
}

const ManagementCard: React.FC<ManagementCardProps> = ({
  name,
  description,
  position,
  image,
  animationState,
  delay = 0,
}) => {
  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={animationState}
      variants={variants}
      transition={{ ...transition, delay }}
      className="w-full h-full p-1.5 relative rounded-3xl border border-gray-400/20 overflow-hidden group opacity-70 hover:opacity-100 transition-all duration-300 bg-red-300/10"
    >
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        <h4 className="text-2xl font-bold mb-2">{name}</h4>
        <span className="px-3 py-1 rounded-md bg-white/10 text-xs sm:text-sm font-medium mb-3">
          {position}
        </span>
        <p className="text-xs sm:text-lg leading-relaxed">{description}</p>
      </div>

      {/* Image */}
      <div className="aspect-[3/4] w-full">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-95 group-hover:blur-[10px]"
          width={300}
          height={400}
        />
      </div>
    </motion.div>
  );
};

export default ManagementCard;
