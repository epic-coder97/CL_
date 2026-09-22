import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCw } from 'lucide-react';

interface TerminalThesisProps {
  isDark: boolean;
}

const THESIS_SENTENCE = "Keep your systems. Keep your models. Add the layer that makes them operational.";
const CHARS = Array.from(THESIS_SENTENCE);

export function TerminalThesis({ isDark }: TerminalThesisProps) {
  const [replayKey, setReplayKey] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025, // 25ms per character terminal typing rhythm
        delayChildren: 0.15,
      },
    },
  };

  const charVariants = {
    hidden: {
      display: 'none',
      opacity: 0,
    },
    visible: {
      display: 'inline',
      opacity: 1,
    },
  };

  return (
    <motion.div
      id="terminal-thesis-block"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`p-3.5 border-l-2 rounded-r-[2px] font-mono text-xs sm:text-[13px] leading-relaxed max-w-2xl transition-colors select-none relative group ${
        isDark
          ? 'border-l-[#2F4BFF] bg-[#161b26] text-[#EDEDEB]'
          : 'border-l-[#2F4BFF] bg-[#F2F6FC] text-[#1F1F1D]'
      }`}
    >
      <div className="flex items-baseline gap-1.5 flex-wrap">
        <span className="text-[#2F4BFF] font-semibold shrink-0">
          // THESIS:
        </span>
        <motion.span
          key={replayKey}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setIsFinished(true)}
          className="font-medium tracking-tight"
        >
          {CHARS.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          {/* Real-time terminal hardware cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              times: [0, 0.5, 1],
              ease: 'linear',
            }}
            className="inline-block ml-0.5 w-[7px] h-[13px] bg-[#2F4BFF] align-middle"
            aria-hidden="true"
          />
        </motion.span>
      </div>

      {/* Terminal Telemetry / Status line with replay control */}
      <div
        className={`mt-1.5 pt-1.5 border-t border-dashed flex items-center justify-between text-[10px] font-mono transition-colors ${
          isDark
            ? 'border-[#232734] text-[#8C8A82]'
            : 'border-[#dce4f2] text-[#637084]'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F4BFF] animate-pulse" />
          <span>CONSOLE STDOUT // TTY_9600</span>
        </span>
        <div className="flex items-center gap-3">
          <span>{isFinished ? 'STATUS: RESOLVED' : 'LOGGING...'}</span>
          <button
            type="button"
            onClick={() => {
              setIsFinished(false);
              setReplayKey((prev) => prev + 1);
            }}
            title="Replay terminal output"
            className="flex items-center gap-1 cursor-pointer opacity-60 hover:opacity-100 hover:text-[#2F4BFF] transition-opacity"
          >
            <RotateCw className="w-2.5 h-2.5" />
            <span>REPLAY</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
