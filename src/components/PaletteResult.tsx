import { motion } from "framer-motion";
import ColorSwatch from "./ColorSwatch";
import type { Palette } from "@/data/palettes";

interface PaletteResultProps {
  palette: Palette;
  onReset: () => void;
}

/**
 * Displays the generated color palette with swatches and a reset button.
 */
const PaletteResult = ({ palette, onReset }: PaletteResultProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto text-center glass-surface rounded-3xl p-6 md:p-10 bg-card/84"
    >
      {/* Season badge */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-body tracking-widest uppercase mb-4"
      >
        {palette.season}
      </motion.span>

      {/* Palette name */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3"
      >
        {palette.name}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-muted-foreground font-body text-lg mb-10 max-w-md mx-auto"
      >
        {palette.description}
      </motion.p>

      {/* Color swatches grid */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
        {palette.colors.map((color, i) => (
          <motion.div
            key={color.hex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <ColorSwatch hex={color.hex} name={color.name} />
          </motion.div>
        ))}
      </div>

      {/* Reset button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onReset}
        className="px-8 py-3 rounded-full border-2 border-primary text-primary font-body font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
      >
        Retake Quiz
      </motion.button>
    </motion.div>
  );
};

export default PaletteResult;
