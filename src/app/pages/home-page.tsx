import { Calendar, Clock, Heart, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import WaveformPlayer from "../components/WaveformPlayer";

export function HomePage() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showPromise, setShowPromise] = useState(false);

  const navigate = useNavigate();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Counter - Dating since January 1, 2020 (customize this!)
  useEffect(() => {
    const startDate = new Date("2025-07-27").getTime();

    const updateCounter = () => {
      const now = new Date().getTime();
      const difference = now - startDate;

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3Njc1NjQwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "This smile still makes my heart race.",
    },
    {
      url: "https://images.unsplash.com/photo-1506014299253-3725319c0f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzY3NTk5MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "One picture, a thousand feelings.",
    },
    {
      url: "https://images.unsplash.com/photo-1615500025837-cf3a8716c83d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRhdGV8ZW58MXx8fHwxNzY3NTk5MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "This was the day I knew.",
    },
    {
      url: "https://images.unsplash.com/photo-1766974888376-3697b53495f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2NzU1NTgzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Your laugh is my favorite sound.",
    },
    {
      url: "https://images.unsplash.com/photo-1728011861432-3259e369ee5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBiZWFjaCUyMHdhbGt8ZW58MXx8fHwxNzY3NTk5MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Walking with you feels like home.",
    },
    {
      url: "https://images.unsplash.com/photo-1761569443180-9baa5be7a87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHBpY25pY3xlbnwxfHx8fDE3Njc1ODA4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Every moment with you is a treasure.",
    },
  ];

  const loveNotes = [
    "You walked into my life quietly… and became everything.",
    "Loving you feels like home.",
    "Every day with you is my favorite chapter.",
    "You are my today, my tomorrow, and everything in between.",
    "In your eyes, I found my forever.",
    "You are the best thing that ever happened to me.",
  ];

  const reasons = [
    "The way you smile without trying",
    "The kindness in your heart",
    "The way you understand me",
    "The way you make my world feel lighter",
    "The way loving you feels effortless",
    "How you make ordinary moments extraordinary",
    "Your beautiful soul that shines through everything",
    "The comfort I find in your presence",
  ];

  //
  const sayNo = () => {
    alert("Please 😭😭😭😭😭");
  };

  return (
    <div className="">
      {/* <WaveformPlayer audioLocation="/song-3.mp3" /> */}
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 opacity-50" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-24 h-24 mx-auto text-rose-500 fill-rose-500 drop-shadow-lg" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl mb-6 font-serif"
          >
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              In a cruel cruel world,
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
              you became my kind and gentle flower.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            This is our story. Filled with memories, love, and adventure. <br />
            <br /> From E, made with love.
          </motion.p>
        </div>
      </motion.section>

      {/* Photo Memories */}
      {/* <section id="memories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Memories That Live Forever
            </h2>
            <p className="text-xl text-gray-600">
              Each moment captured, each feeling remembered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <ImageWithFallback
                    src={photo.url}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                >
                  <p className="text-white text-lg">{photo.caption}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Love Notes */}
      {/* <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Love Notes From My Heart
            </h2>
            <p className="text-xl text-gray-600">
              Words that hold a universe of feelings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {loveNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-rose-500"
              >
                <p className="text-lg text-gray-700 italic font-serif">
                  "{note}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Love Counter */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Clock className="w-16 h-16 mx-auto mb-6 text-rose-500" />
            <h2 className="text-4xl md:text-5xl mb-4">
              Time We've Been Together
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Every second with you is a memory I treasure.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hours" },
                { value: minutes, label: "Minutes" },
                { value: seconds, label: "Seconds" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-rose-100 to-pink-100 p-6 rounded-2xl shadow-lg"
                >
                  <motion.div
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold text-rose-600 mb-2"
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Reasons I Love You */}
      {/* <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-rose-500" />
            <h2 className="text-4xl md:text-5xl mb-4">
              Reasons My Heart Chose You
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md"
              >
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500 flex-shrink-0" />
                <p className="text-lg text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* The Promise */}

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-red-600" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1694503522904-50163a3e7141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwaGVhcnQlMjBib2tlaHxlbnwxfHx8fDE3Njc1MzkyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {!showPromise && (
              <div className="">
                <h2 className="text-3xl md:text-5xl text-white mb-8 font-serif">
                  No matter how the past has been, I am lucky to experience the
                  present with you.
                </h2>
                <h2 className="text-3xl md:text-5xl text-white mb-8 font-serif">
                  Will You Be My Valentine?
                </h2>
              </div>
            )}

            {!showPromise ? (
              <div className="flex items-center gap-5 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPromise(true)}
                  className="px-12 py-4 bg-white text-rose-600 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-shadow flex items-center gap-3"
                >
                  YES
                  <Heart className="w-6 h-6 fill-current" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sayNo}
                  className="px-12 py-4 bg-white/25 text-white rounded-full text-xl shadow-2xl hover:shadow-3xl transition-shadow flex items-center gap-3 backdrop-blur-xl"
                >
                  No
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="space-y-8"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="w-32 h-32 mx-auto text-white fill-white" />
                </motion.div>
                <div className="">
                  <p className="text-4xl md:text-5xl text-white font-serif mb-4">
                    Forever. Always. You.
                  </p>
                  <p className="text-3xl md:text-4xl text-white font-serif">
                    Now that you&apos;ve accepted.
                  </p>
                </div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("/private-gallery");
                    // document
                    //   .getElementById("memories")
                    //   ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Walk Through Our Love
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
