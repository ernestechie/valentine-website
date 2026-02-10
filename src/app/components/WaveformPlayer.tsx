import { Music, Music2, Pause, Play } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface WaveformPlayerProps {
  audioLocation: string;
}

export default function WaveformPlayer({ audioLocation }: WaveformPlayerProps) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  async function autoplayAudio() {
    if (!waveformRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#ddd",
      progressColor: "#3b82f6",
      cursorColor: "#3b82f6",
      height: 0,
    });

    wavesurfer.current.load(audioLocation);

    try {
      const canPlay = await wavesurfer.current.play();

      if (canPlay === undefined) {
        // Show play button
        setShowPlayButton(true);
      } else {
        setIsPlaying(true);
      }
      console.error("canPlay", canPlay);
    } catch (error) {
      console.error(error);
      setShowPlayButton(true);
    } finally {
      return () => wavesurfer.current?.destroy();
    }
  }

  useEffect(() => {
    if (!waveformRef.current) return;

    autoplayAudio();
  }, []);

  const playSong = () => {
    setIsPlaying(true);
    wavesurfer.current?.play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    wavesurfer.current?.pause();
  };

  return (
    <div ref={waveformRef} className="fixed bottom-8 right-8 !z-100">
      {showPlayButton && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (isPlaying) {
              pauseSong();
            } else {
              playSong();
            }
          }}
          className="px-8 py-4 bg-white text-rose-600 rounded-xl text-xl shadow-2xl hover:shadow-3xl transition-shadow flex items-center gap-3"
        >
          {isPlaying ? (
            <Pause className="size-h-16 mx-auto text-rose-500 fill-rose-500" />
          ) : (
            <Play className="size-h-16 mx-auto text-rose-500 fill-rose-500" />
          )}
          {isPlaying ? "Pause music" : "Play music"}
        </motion.button>
      )}
    </div>
  );
}
