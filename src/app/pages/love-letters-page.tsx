import { Heart } from "lucide-react";

import { motion } from "motion/react";
import { useState } from "react";

export function LoveLettersPage() {
  const [openLetter, setOpenLetter] = useState<number | null>(null);

  const letters = [
    {
      title: "I Love You",
      date: "February 9, 2026",
      preview: "My Love, I sit here thinking of you...",
      content: `I Love You,

I don't really know what to write today, I just love love love you.

With all my heart,
Yours.`,
    },
    {
      title: "A Promise to Keep",
      date: "February 10, 2026",
      preview:
        "I promise to love and support you, even in moments that do not feel fair...",
      content: `Sugar,

      I am not the best writer in the world, but I write this from the bottom of my heart.
      I am not the best man in the world but I am your man, and I want to be your perfect man.

      Sometimes I fail to see things from a different perspective, and completely forget its not always about me, or my ideals.

      This is something I must learn, and I am willing to learn. I am really sorry.

      I promise to hold your hands through every storm and dance with you when it settles.

I promise to be your safe haven, your cheerleader, and your partner in all of life's adventures.

You are my today that never ends.

E.`,
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center my-20"
      >
        <h1 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-rose-900 to-pink-900 bg-clip-text text-transparent">
          My notes to you.
        </h1>
      </motion.div>

      {/* Letters Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setOpenLetter(openLetter === index ? null : index)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-rose-300 transition-all"
            >
              {/* Envelope Front */}
              <div className="p-8 bg-gradient-to-br from-rose-100 to-pink-100">
                <div className="flex items-center justify-between mb-4">
                  <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                  <span className="text-sm text-gray-600">{letter.date}</span>
                </div>
                <h3 className="text-2xl mb-3">{letter.title}</h3>
                <p className="text-gray-600 italic">"{letter.preview}"</p>
              </div>

              {/* Letter Content */}
              <motion.div
                initial={false}
                animate={{
                  height: openLetter === index ? "auto" : 0,
                  opacity: openLetter === index ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="p-8 bg-white border-t border-rose-100">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed font-serif text-lg">
                    {letter.content}
                  </div>
                </div>
              </motion.div>

              {/* Open/Close Indicator */}
              <div className="p-4 bg-rose-50 text-center">
                <span className="text-sm text-rose-600">
                  {openLetter === index ? "Click to close" : "Click to read"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-white p-12 rounded-3xl shadow-xl max-w-3xl mx-auto"
      >
        <p className="text-2xl text-gray-700 italic font-serif">
          "Every word I write is a piece of my heart, and every piece belongs to
          you."
        </p>
      </motion.div>
    </div>
  );
}
