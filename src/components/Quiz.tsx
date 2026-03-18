import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QuestionCard from "./QuestionCard";
import PaletteResult from "./PaletteResult";
import { getPalette } from "@/data/palettes";
import type { Palette } from "@/data/palettes";

/** Quiz question definitions */
const questions = [
  {
    key: "undertone",
    question: "What's your undertone?",
    subtitle:
      "Let's start with the Vein Test: Look at the veins on your inner wrist or forearm. If they appear blue or purple, you've got cool undertones. If they appear green, you're rocking warm undertones. If you see a mix of both, you're likely neutral!",
    options: [
      { value: "warm", label: "Warm (green veins)", emoji: "🌅" },
      { value: "cool", label: "Cool (blue/purple veins)", emoji: "❄️" },
      { value: "neutral", label: "Neutral (mix of both)", emoji: "⚖️" },
    ],
  },
  {
    key: "contrast",
    question: "What's your contrast level?",
    subtitle: "How much difference is there between your hair, skin, and eyes?",
    options: [
      { value: "low", label: "Low", emoji: "🌫️" },
      { value: "medium", label: "Medium", emoji: "🎭" },
      { value: "high", label: "High", emoji: "⚡" },
    ],
  },
  {
    key: "depth",
    question: "What's your overall depth?",
    subtitle: "Think about your hair, skin, and eye color together.",
    options: [
      { value: "light", label: "Light", emoji: "☀️" },
      { value: "medium", label: "Medium", emoji: "🌤️" },
      { value: "deep", label: "Deep", emoji: "🌑" },
    ],
  },
];

/**
 * Main quiz component — handles step navigation, answer state, and result display.
 */
const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Palette | null>(null);

  /** Handle option selection — auto-advance to next step */
  const handleSelect = useCallback(
    (value: string) => {
      const currentQuestion = questions[step];
      const newAnswers = { ...answers, [currentQuestion.key]: value };
      setAnswers(newAnswers);

      // If last question, generate palette
      if (step === questions.length - 1) {
        const palette = getPalette(
          newAnswers.undertone,
          newAnswers.contrast,
          newAnswers.depth
        );
        // Save to localStorage
        try {
          localStorage.setItem("colorAnalysisResult", JSON.stringify(palette));
        } catch {
          // localStorage may be unavailable
        }
        // Small delay for smooth transition
        setTimeout(() => setResult(palette), 300);
      } else {
        // Auto-advance after brief delay
        setTimeout(() => setStep((s) => s + 1), 300);
      }
    },
    [step, answers]
  );

  /** Reset quiz to start */
  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 glass-surface rounded-3xl px-6 py-5"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
          Color Analysis
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          Discover the palette that brings out your best.
        </p>
      </motion.div>

      {/* Content area */}
      <AnimatePresence mode="wait">
        {result ? (
          <PaletteResult key="result" palette={result} onReset={handleReset} />
        ) : (
          <QuestionCard
            key={step}
            step={step + 1}
            totalSteps={questions.length}
            question={questions[step].question}
            subtitle={questions[step].subtitle}
            options={questions[step].options}
            selected={answers[questions[step].key] || null}
            onSelect={handleSelect}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
