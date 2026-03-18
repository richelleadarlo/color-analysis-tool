/**
 * Palette data for the Color Analysis Tool.
 * Each palette is keyed by a combination of undertone, contrast, and depth.
 * Format: "undertone-contrast-depth"
 */

export interface Palette {
  name: string;
  season: string;
  description: string;
  colors: { hex: string; name: string }[];
}

// All 27 combinations mapped to seasonal palettes
const palettes: Record<string, Palette> = {
  // === WARM ===
  "warm-low-light": {
    name: "Soft Spring",
    season: "Spring",
    description: "Gentle, warm tones with a sun-kissed glow. Think peach sunsets and blooming gardens.",
    colors: [
      { hex: "#F5E6CC", name: "Vanilla Cream" },
      { hex: "#FADADD", name: "Blush Pink" },
      { hex: "#FADCAA", name: "Peach Nectar" },
      { hex: "#C9B99A", name: "Warm Sand" },
      { hex: "#D4A373", name: "Golden Tan" },
      { hex: "#A8C4A2", name: "Sage Mist" },
    ],
  },
  "warm-low-medium": {
    name: "Warm Spring",
    season: "Spring",
    description: "Inviting, golden warmth like honey dripping on a summer morning.",
    colors: [
      { hex: "#F1C166", name: "Honey Gold" },
      { hex: "#E8A87C", name: "Apricot" },
      { hex: "#D4A373", name: "Caramel" },
      { hex: "#C9B99A", name: "Wheat" },
      { hex: "#85B07E", name: "Fern Green" },
      { hex: "#6B8F71", name: "Moss" },
    ],
  },
  "warm-low-deep": {
    name: "Warm Autumn",
    season: "Autumn",
    description: "Rich, earthy warmth like spiced cider on a crisp fall day.",
    colors: [
      { hex: "#8B5E3C", name: "Cinnamon" },
      { hex: "#A0522D", name: "Sienna" },
      { hex: "#C47A4A", name: "Terracotta" },
      { hex: "#D4A373", name: "Caramel" },
      { hex: "#6B8F71", name: "Forest Sage" },
      { hex: "#4A6741", name: "Deep Moss" },
    ],
  },
  "warm-medium-light": {
    name: "Light Spring",
    season: "Spring",
    description: "Bright and fresh like a meadow in bloom with warm golden light.",
    colors: [
      { hex: "#FFD700", name: "Sunflower" },
      { hex: "#FFB347", name: "Tangerine" },
      { hex: "#FFDAB9", name: "Peach Puff" },
      { hex: "#98D8C8", name: "Seafoam" },
      { hex: "#F0E68C", name: "Khaki Gold" },
      { hex: "#DDA0DD", name: "Soft Plum" },
    ],
  },
  "warm-medium-medium": {
    name: "True Spring",
    season: "Spring",
    description: "Vibrant and energetic like wildflowers under a clear spring sky.",
    colors: [
      { hex: "#FF6F61", name: "Coral" },
      { hex: "#FFB347", name: "Mango" },
      { hex: "#4ECDC4", name: "Turquoise" },
      { hex: "#F7DC6F", name: "Buttercup" },
      { hex: "#82C785", name: "Apple Green" },
      { hex: "#E8A87C", name: "Peach" },
    ],
  },
  "warm-medium-deep": {
    name: "True Autumn",
    season: "Autumn",
    description: "The heart of autumn — golden leaves, warm earth, and amber light.",
    colors: [
      { hex: "#B7410E", name: "Rust" },
      { hex: "#CC7722", name: "Ochre" },
      { hex: "#8B6914", name: "Dark Goldenrod" },
      { hex: "#556B2F", name: "Olive Drab" },
      { hex: "#D2691E", name: "Chocolate" },
      { hex: "#DAA520", name: "Goldenrod" },
    ],
  },
  "warm-high-light": {
    name: "Bright Spring",
    season: "Spring",
    description: "High energy warmth with vivid pops of color and golden radiance.",
    colors: [
      { hex: "#FF4500", name: "Orange Red" },
      { hex: "#FFD700", name: "Gold" },
      { hex: "#00CED1", name: "Tropical Teal" },
      { hex: "#FF69B4", name: "Hot Pink" },
      { hex: "#32CD32", name: "Lime Green" },
      { hex: "#FF8C00", name: "Dark Orange" },
    ],
  },
  "warm-high-medium": {
    name: "Deep Spring",
    season: "Spring",
    description: "Bold warmth with striking contrast — sunlit drama.",
    colors: [
      { hex: "#B22222", name: "Firebrick" },
      { hex: "#DAA520", name: "Goldenrod" },
      { hex: "#228B22", name: "Forest Green" },
      { hex: "#FF6347", name: "Tomato" },
      { hex: "#CD853F", name: "Peru" },
      { hex: "#8B4513", name: "Saddle Brown" },
    ],
  },
  "warm-high-deep": {
    name: "Deep Autumn",
    season: "Autumn",
    description: "Dramatic and luxurious — burgundy wines and dark chocolate.",
    colors: [
      { hex: "#542916", name: "Espresso" },
      { hex: "#800020", name: "Burgundy" },
      { hex: "#8B0000", name: "Dark Red" },
      { hex: "#556B2F", name: "Dark Olive" },
      { hex: "#8B6914", name: "Bronze" },
      { hex: "#2F4F4F", name: "Dark Slate" },
    ],
  },

  // === COOL ===
  "cool-low-light": {
    name: "Soft Summer",
    season: "Summer",
    description: "Misty, muted tones like a cool morning by the lavender fields.",
    colors: [
      { hex: "#B0C4DE", name: "Light Steel Blue" },
      { hex: "#D8BFD8", name: "Thistle" },
      { hex: "#C8C8C8", name: "Silver" },
      { hex: "#DCC6E0", name: "Wisteria" },
      { hex: "#A9B2C3", name: "Cool Grey" },
      { hex: "#C4AEAD", name: "Dusty Rose" },
    ],
  },
  "cool-low-medium": {
    name: "Light Summer",
    season: "Summer",
    description: "Soft, powdery cool tones like a watercolor seascape.",
    colors: [
      { hex: "#88B8CE", name: "Porcelain Blue" },
      { hex: "#B5A7C6", name: "Lavender" },
      { hex: "#A8BFCE", name: "Powder Blue" },
      { hex: "#C9A9C7", name: "Mauve" },
      { hex: "#90B0A0", name: "Sage" },
      { hex: "#D5C4D7", name: "Soft Lilac" },
    ],
  },
  "cool-low-deep": {
    name: "Soft Autumn",
    season: "Autumn",
    description: "Subdued, smoky tones with a cool undertone — misty autumn mornings.",
    colors: [
      { hex: "#708090", name: "Slate Grey" },
      { hex: "#8B7D6B", name: "Driftwood" },
      { hex: "#9E8B7D", name: "Mushroom" },
      { hex: "#7B8F8A", name: "Eucalyptus" },
      { hex: "#A0877E", name: "Taupe" },
      { hex: "#6B7B73", name: "Juniper" },
    ],
  },
  "cool-medium-light": {
    name: "True Summer",
    season: "Summer",
    description: "Classic summer coolness — ocean blues and rose gardens.",
    colors: [
      { hex: "#6495ED", name: "Cornflower" },
      { hex: "#DB7093", name: "Pale Violet Red" },
      { hex: "#87CEEB", name: "Sky Blue" },
      { hex: "#DDA0DD", name: "Plum" },
      { hex: "#98D8C8", name: "Mint" },
      { hex: "#E6A8D7", name: "Orchid Pink" },
    ],
  },
  "cool-medium-medium": {
    name: "Cool Summer",
    season: "Summer",
    description: "Refined, elegant cool tones with balanced contrast.",
    colors: [
      { hex: "#4682B4", name: "Steel Blue" },
      { hex: "#6A5ACD", name: "Slate Blue" },
      { hex: "#BC8F8F", name: "Rosy Brown" },
      { hex: "#5F9EA0", name: "Cadet Blue" },
      { hex: "#9370DB", name: "Medium Purple" },
      { hex: "#778899", name: "Light Slate" },
    ],
  },
  "cool-medium-deep": {
    name: "Cool Winter",
    season: "Winter",
    description: "Crisp and icy with jewel-toned depth — a frozen lake under moonlight.",
    colors: [
      { hex: "#191970", name: "Midnight Blue" },
      { hex: "#800080", name: "Purple" },
      { hex: "#008B8B", name: "Dark Cyan" },
      { hex: "#C71585", name: "Medium Violet" },
      { hex: "#4169E1", name: "Royal Blue" },
      { hex: "#2F4F4F", name: "Dark Teal" },
    ],
  },
  "cool-high-light": {
    name: "Bright Winter",
    season: "Winter",
    description: "Icy clarity with vivid, high-contrast pops of cool color.",
    colors: [
      { hex: "#FF1493", name: "Deep Pink" },
      { hex: "#00BFFF", name: "Deep Sky Blue" },
      { hex: "#FFFFFF", name: "Pure White" },
      { hex: "#7B68EE", name: "Medium Slate" },
      { hex: "#00FA9A", name: "Spring Green" },
      { hex: "#FF00FF", name: "Magenta" },
    ],
  },
  "cool-high-medium": {
    name: "True Winter",
    season: "Winter",
    description: "Bold, dramatic, and striking — snowscapes and jewels.",
    colors: [
      { hex: "#000080", name: "Navy" },
      { hex: "#DC143C", name: "Crimson" },
      { hex: "#FFFFFF", name: "Snow White" },
      { hex: "#008000", name: "Emerald" },
      { hex: "#4B0082", name: "Indigo" },
      { hex: "#C0C0C0", name: "Silver" },
    ],
  },
  "cool-high-deep": {
    name: "Deep Winter",
    season: "Winter",
    description: "The deepest, most dramatic palette — midnight, ebony, and jewel tones.",
    colors: [
      { hex: "#0C0C0C", name: "Onyx" },
      { hex: "#1C1C6B", name: "Dark Navy" },
      { hex: "#4B0082", name: "Deep Indigo" },
      { hex: "#800020", name: "Oxblood" },
      { hex: "#006400", name: "Dark Green" },
      { hex: "#36454F", name: "Charcoal" },
    ],
  },

  // === NEUTRAL ===
  "neutral-low-light": {
    name: "Soft Light",
    season: "Neutral",
    description: "Ethereal and gentle — dove grey, blush, and whispered neutrals.",
    colors: [
      { hex: "#F5F0E8", name: "Ivory" },
      { hex: "#E8D5C4", name: "Champagne" },
      { hex: "#C4B7A6", name: "Taupe" },
      { hex: "#D4C5B9", name: "Linen" },
      { hex: "#B8AFA9", name: "Pewter" },
      { hex: "#C9BBB2", name: "Warm Grey" },
    ],
  },
  "neutral-low-medium": {
    name: "Muted Neutral",
    season: "Neutral",
    description: "Understated elegance — balanced, harmonious, and timeless.",
    colors: [
      { hex: "#A69B8D", name: "Stone" },
      { hex: "#8F8172", name: "Driftwood" },
      { hex: "#B79858", name: "Antique Gold" },
      { hex: "#9BA18E", name: "Sage Grey" },
      { hex: "#B8AFA9", name: "Greige" },
      { hex: "#A09080", name: "Sandstone" },
    ],
  },
  "neutral-low-deep": {
    name: "Deep Neutral",
    season: "Neutral",
    description: "Grounded and sophisticated — espresso, charcoal, and deep earth.",
    colors: [
      { hex: "#3C3C3C", name: "Charcoal" },
      { hex: "#5C4033", name: "Dark Brown" },
      { hex: "#4A4A4A", name: "Graphite" },
      { hex: "#6B5B4F", name: "Umber" },
      { hex: "#2C3E50", name: "Dark Slate" },
      { hex: "#4E4E4E", name: "Iron" },
    ],
  },
  "neutral-medium-light": {
    name: "Classic Light",
    season: "Neutral",
    description: "Clean, airy, and universally flattering light neutrals.",
    colors: [
      { hex: "#FEFAF0", name: "Milk" },
      { hex: "#E8DAC9", name: "Bisque" },
      { hex: "#D2B48C", name: "Tan" },
      { hex: "#87CEEB", name: "Sky Blue" },
      { hex: "#F0E68C", name: "Khaki" },
      { hex: "#DCC6E0", name: "Soft Violet" },
    ],
  },
  "neutral-medium-medium": {
    name: "True Neutral",
    season: "Neutral",
    description: "Perfectly balanced — the ultimate versatile palette.",
    colors: [
      { hex: "#808080", name: "True Grey" },
      { hex: "#5F9EA0", name: "Cadet Blue" },
      { hex: "#BDB76B", name: "Dark Khaki" },
      { hex: "#CD853F", name: "Peru" },
      { hex: "#708090", name: "Slate" },
      { hex: "#8FBC8F", name: "Sea Green" },
    ],
  },
  "neutral-medium-deep": {
    name: "Rich Neutral",
    season: "Neutral",
    description: "Deep, commanding neutrals with quiet sophistication.",
    colors: [
      { hex: "#2C2C2C", name: "Near Black" },
      { hex: "#4A3728", name: "Dark Walnut" },
      { hex: "#2F4F4F", name: "Dark Teal" },
      { hex: "#696969", name: "Dim Grey" },
      { hex: "#8B4513", name: "Saddle Brown" },
      { hex: "#36454F", name: "Charcoal Blue" },
    ],
  },
  "neutral-high-light": {
    name: "Clear Light",
    season: "Neutral",
    description: "High contrast light tones — crisp whites with bold accents.",
    colors: [
      { hex: "#FFFFFF", name: "Pure White" },
      { hex: "#000000", name: "Black" },
      { hex: "#FF0000", name: "True Red" },
      { hex: "#0000CD", name: "Medium Blue" },
      { hex: "#FFD700", name: "Gold" },
      { hex: "#228B22", name: "Forest Green" },
    ],
  },
  "neutral-high-medium": {
    name: "Vivid Neutral",
    season: "Neutral",
    description: "Striking contrast with vivid, clear tones on a neutral base.",
    colors: [
      { hex: "#1C1C1C", name: "Jet" },
      { hex: "#F5F5F5", name: "White Smoke" },
      { hex: "#DC143C", name: "Crimson" },
      { hex: "#4169E1", name: "Royal Blue" },
      { hex: "#228B22", name: "Forest" },
      { hex: "#DAA520", name: "Goldenrod" },
    ],
  },
  "neutral-high-deep": {
    name: "Dramatic Neutral",
    season: "Neutral",
    description: "Maximum drama — deep darks with bold, clear accents.",
    colors: [
      { hex: "#0A0A0A", name: "Obsidian" },
      { hex: "#F8F8FF", name: "Ghost White" },
      { hex: "#8B0000", name: "Dark Red" },
      { hex: "#00008B", name: "Dark Blue" },
      { hex: "#006400", name: "Dark Green" },
      { hex: "#4B0082", name: "Indigo" },
    ],
  },
};

/**
 * Look up a palette by the user's answers.
 * Returns the matching palette or a fallback.
 */
export function getPalette(
  undertone: string,
  contrast: string,
  depth: string
): Palette {
  const key = `${undertone}-${contrast}-${depth}`;
  return palettes[key] || palettes["neutral-medium-medium"];
}

export default palettes;
