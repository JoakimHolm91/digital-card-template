type Theme = {
  background: string;
  card: string;
  accent: string;
};

const BACKGROUND_MAP: Record<
  string,
  { bg: string; text: string; muted: string }
> = {
  "zinc-900": { bg: "bg-zinc-900", text: "text-white", muted: "text-zinc-400" },
  "gray-100": {
    bg: "bg-gray-100",
    text: "text-zinc-900",
    muted: "text-zinc-600",
  },
  // Add more as needed
};

const CARD_MAP: Record<string, { bg: string; text: string; muted: string }> = {
  cream: {
    bg: "bg-amber-100",
    text: "text-zinc-900",
    muted: "text-zinc-600",
  },
  white: {
    bg: "bg-white",
    text: "text-zinc-900",
    muted: "text-zinc-600",
  },
};

const ACCENT_MAP: Record<string, { button: string; buttonText: string }> = {
  "red-600": {
    button: "bg-red-600 hover:bg-red-700",
    buttonText: "text-white",
  },
  "blue-600": {
    button: "bg-blue-600 hover:bg-blue-700",
    buttonText: "text-white",
  },
};

export type ThemeClasses = ReturnType<typeof getThemeClasses>;

export function getThemeClasses(theme: Theme) {
  const bg = BACKGROUND_MAP[theme.background] ?? BACKGROUND_MAP["zinc-900"];
  const card = CARD_MAP[theme.card] ?? CARD_MAP["white"];
  const accent = ACCENT_MAP[theme.accent] ?? ACCENT_MAP["red-600"];

  return {
    pageBg: bg.bg,
    pageText: bg.text,
    mutedText: bg.muted,

    cardBg: card.bg,
    cardText: card.text,
    cardMutedText: card.muted,

    accentButton: accent.button,
    accentButtonText: accent.buttonText,

    navBg: card.bg,
    navText: card.text,

    heroText: "text-white",
    secondaryButton: "border border-white text-white hover:bg-white/10",
  };
}
