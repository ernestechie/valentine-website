import { Eye, EyeOff, Heart, Lock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import image0 from "../../assets/images/image-0.JPG";
import image1 from "../../assets/images/image-1.jpeg";
import image2 from "../../assets/images/image-2.jpeg";
import image3 from "../../assets/images/image-3.jpeg";
import image4 from "../../assets/images/image-4.jpeg";
import image5 from "../../assets/images/image-5.jpeg";
import image6 from "../../assets/images/image-6.jpeg";
import image7 from "../../assets/images/image-7.jpeg";

import { LoveLettersPage } from "./love-letters-page";

export function PrivateGalleryPage() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Set your secret password here
  const SECRET_PASSWORD = "27-07-2025"; // Change this to your desired password

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const privatePhotos = useMemo(
    () => [
      {
        url: image0,
        note: "This day changed everything.",
        rotate: -3,
        x: 20,
        y: 20,
      },
      {
        url: image1,
        note: "I want to hold a piece of you, wherever and whenever.",
        rotate: 2,
        x: 55,
        y: 30,
      },
      {
        url: image2,
        note: "Just you and me.",
        rotate: -5,
        x: 10,
        y: 50,
      },
      {
        url: image3,
        note: "I want to wake up next to you time and time again.",
        rotate: 4,
        x: 70,
        y: 10,
      },
      {
        url: image4,
        note: "I love how I feel when I am with you.",
        rotate: -2,
        x: 40,
        y: 10,
      },
      {
        url: image5,
        note: "Every disagreement is a testament of how far we've come.",
        rotate: 3,
        x: 80,
        y: 40,
      },
      {
        url: image6,
        note: "You make me feel better about the bad things in my life.",
        rotate: 4,
        x: 50,
        y: 75,
      },
      {
        url: image7,
        note: "I want many more moments with you.",
        rotate: 4,
        x: 30,
        y: 60,
      },
    ],
    [],
  );

  const privateNotes = [
    {
      text: "I want you, and I want you to keep wanting me too.",
      color: "from-rose-200 to-pink-200",
      rotate: -5,
      x: 15,
      y: 20,
    },
    {
      text: "After everything, I am glad we are in this together.",
      color: "from-pink-200 to-red-200",
      rotate: 3,
      x: 65,
      y: 15,
    },
    {
      text: "With you, I feel safe.",
      color: "from-red-200 to-rose-200",
      rotate: -2,
      x: 30,
      y: 55,
    },
    {
      text: "You are my kind, and gentle flower.",
      color: "from-rose-200 to-pink-200",
      rotate: 4,
      x: 70,
      y: 60,
    },
    {
      text: "You are my today, and my today never ends.",
      color: "from-pink-200 to-red-200",
      rotate: -3,
      x: 45,
      y: 80,
    },
  ];

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          // Password Lock Screen
          <motion.div
            key="lock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center section bg-gradient-to-br from-rose-900 via-pink-900 to-red-900"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Lock className="size-16 mx-auto mb-6 text-rose-500" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl text-center mb-4">
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Hi, Flower!
                </span>
              </h1>
              <p className="text-center text-gray-600 mb-8">
                Enter the secret password to unlock our most intimate moments
              </p>

              <form onSubmit={handleUnlock} className="space-y-6">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter date (DD-MM-YYYY): "
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      error
                        ? "border-red-500 focus:border-red-600"
                        : "border-rose-200 focus:border-rose-500"
                    } outline-none`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    Incorrect. Are you sure you are my babe?
                  </motion.p>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Get in here, baby!
                </motion.button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                💡 Hint: Anniversary date
              </p>
            </motion.div>
          </motion.div>
        ) : (
          // Private Gallery Content
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=""
          >
            {/* Header */}
            <div className="section bg-gradient-to-br from-rose-900 via-pink-900 to-red-900">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
              >
                <Heart className="w-20 h-20 mx-auto mb-6 text-rose-200 fill-rose-200" />
                <h1 className="text-5xl md:text-7xl mb-6 text-white">
                  Our Secret Place
                </h1>
                <p className="text-xl md:text-2xl text-rose-200 max-w-3xl mx-auto">
                  Just me, you, and the moments we&apos;ve shared.
                </p>
              </motion.div>

              {/* Scattered Photos */}
              <div className="relative min-h-[800px] mb-20">
                {privatePhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: photo.rotate,
                    }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{
                      scale: 1.3,
                      rotate: photo.rotate - 5,
                      zIndex: 50,
                    }}
                    drag
                    dragConstraints={{
                      top: -100,
                      bottom: 100,
                      left: -100,
                      right: 100,
                    }}
                    className="absolute cursor-move"
                    style={{
                      left: `${photo.x}%`,
                      top: `${photo.y}%`,
                      width: "250px",
                      zIndex: hoveredIndex === index ? 50 : index, // Also in style for immediate effect
                    }}
                    onDrag={() => setHoveredIndex(index)}
                    // onDragEnd={() => setHoveredIndex(index)}
                    // For hover
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    // For click
                    onClick={() =>
                      setHoveredIndex(hoveredIndex === index ? null : index)
                    }
                  >
                    <div className="bg-white p-3 rounded-lg shadow-2xl">
                      <ImageWithFallback
                        src={photo.url}
                        alt={`Private memory ${index + 1}`}
                        className="w-full h-64 object-cover rounded"
                      />
                      <p className="text-center mt-3 text-sm text-gray-700 italic font-serif">
                        {photo.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="section bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
              <LoveLettersPage />
            </div>

            {/* Scattered Notes */}
            <div className="section bg-gradient-to-tr from-black/90 via-gray-900 to-black/90">
              <div className="relative min-h-[600px] mt-32">
                {privateNotes.map((note, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: note.rotate,
                    }}
                    transition={{ delay: index * 0.15 + 1 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 50,
                    }}
                    drag
                    dragConstraints={{
                      top: -100,
                      bottom: 100,
                      left: -100,
                      right: 100,
                    }}
                    className="absolute cursor-move"
                    style={{
                      left: `${note.x}%`,
                      top: `${note.y}%`,
                      width: "220px",
                    }}
                  >
                    <div
                      className={`bg-gradient-to-br ${note.color} p-6 rounded-lg shadow-2xl`}
                    >
                      <p className="text-gray-800 text-lg font-serif italic text-center">
                        "{note.text}"
                      </p>
                      <Heart className="w-6 h-6 mx-auto mt-3 text-rose-600 fill-rose-600" />
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Bottom Message */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="mt-20 text-center bg-white/10 backdrop-blur-sm p-12 rounded-3xl max-w-3xl mx-auto"
              >
                <p className="text-3xl text-white italic font-serif">
                  I owe you the world, and I will pay in cash!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
