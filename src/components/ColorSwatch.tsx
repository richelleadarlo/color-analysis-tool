import { useState } from "react";
import { motion } from "framer-motion";

interface ColorSwatchProps {
  hex: string;
  name: string;
}

/**
 * A single color swatch with hex copy functionality.
 */
const ColorSwatch = ({ hex, name }: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback: silently fail
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleCopy}
      className="group flex flex-col items-center gap-2 cursor-pointer"
      title={`Copy ${hex}`}
    >
      {/* Color circle */}
      <div
        className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg border-4 border-card transition-shadow duration-200 group-hover:shadow-xl"
        style={{ backgroundColor: hex }}
      />

      {/* Name */}
      <span className="text-sm font-body font-medium text-foreground text-center leading-tight">
        {name}
      </span>

      {/* Hex / Copied label */}
      <span className="text-xs font-body text-muted-foreground tracking-wide uppercase">
        {copied ? "✓ Copied!" : hex}
      </span>
    </motion.button>
  );
};

export default ColorSwatch;
