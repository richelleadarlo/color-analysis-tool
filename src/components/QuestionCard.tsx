import { motion } from "framer-motion";

interface QuestionCardProps {
  /** The question number (1-based) */
  step: number;
  /** Total number of questions */
  totalSteps: number;
  /** The question text */
  question: string;
  /** A brief helper text */
  subtitle: string;
  /** The available options */
  options: { value: string; label: string; emoji: string }[];
  /** Currently selected value */
  selected: string | null;
  /** Callback when user picks an option */
  onSelect: (value: string) => void;
}

/**
 * Renders a single question with animated option buttons.
 */
const QuestionCard = ({
  step,
  totalSteps,
  question,
  subtitle,
  options,
  selected,
  onSelect,
}: QuestionCardProps) => {
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto glass-surface rounded-2xl p-6 md:p-8 bg-card/86"
    >
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < step ? "bg-primary" : i === step ? "bg-secondary" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Step label */}
      <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-2">
        Question {step} of {totalSteps}
      </p>

      {/* Question */}
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2 text-foreground">
        {question}
      </h2>
      <p className="text-muted-foreground font-body mb-8">{subtitle}</p>

      {/* Options */}
      <div className="grid gap-3">
        {options.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option.value)}
            className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-200 font-body text-lg
              ${
                selected === option.value
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-card/90 text-card-foreground hover:border-secondary hover:shadow-sm backdrop-blur-[2px]"
              }`}
          >
            <span className="mr-3">{option.emoji}</span>
            {option.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
