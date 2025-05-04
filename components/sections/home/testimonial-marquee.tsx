import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
  visible: {
    filter: "blur(0px)",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ReviewCard = ({
  img,
  name,
  username,
  body,
  animate = false,
  index = 0,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  animate?: boolean;
  index?: number;
}) => {
  const CardWrapper = animate ? motion.figure : "figure";

  return (
    <CardWrapper
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl p-5 mx-3 transition-all duration-300",
        // glassmorphism styles
        "bg-purple-300/10 backdrop-blur-md drop-shadow-lg border border-dark/30",
        // hover effect
        "hover:bg-white/20 hover:shadow-lg hover:scale-105",
        // dark mode adjustments
        "dark:bg-gray-900/40 dark:border-white/10 dark:hover:bg-gray-800/50",
      )}
      variants={animate ? itemVariants : undefined}
      custom={index}
    >
      {/* Glassmorphism subtle highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-row items-center gap-3">
          <div className="rounded-full overflow-hidden border-2 border-white/30 shadow-md">
            <img
              className="w-10 h-10 object-cover"
              width={40}
              height={40}
              alt={`${name}'s profile picture`}
              src={img}
            />
          </div>
          <div className="flex flex-col">
            <figcaption className="text-sm font-bold text-neutral-700">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-neutral-700/70">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-4 text-sm leading-relaxed text-neutral-700 font-medium">
          &#34;{body}&#34;
        </blockquote>
      </div>
    </CardWrapper>
  );
};

export function TestimonialMarquee({ animate = false, inView = false }) {
  const MarqueeWrapper = animate ? motion.div : "div";

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      {/* Optional background elements for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>

      <MarqueeWrapper
        className="relative w-full space-y-6"
        variants={animate ? containerVariants : undefined}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review, index) => (
            <ReviewCard
              key={review.username}
              {...review}
              animate={animate}
              index={index}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review, index) => (
            <ReviewCard
              key={review.username}
              {...review}
              animate={animate}
              index={index + firstRow.length}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review, index) => (
            <ReviewCard
              key={`${review.username}-dup`}
              {...review}
              animate={animate}
              index={index + firstRow.length + secondRow.length}
            />
          ))}
        </Marquee>
      </MarqueeWrapper>

      {/* Gradient fade effects */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#EEF2FF] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#EEF2FF] to-transparent"></div>
    </div>
  );
}
