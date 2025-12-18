export function getThemeClasses(theme: { background: string; card: string; accent: string }) {
  return {
    background: `bg-${theme.background}`,
    card: `bg-${theme.card}`,
    accent: `bg-${theme.accent}`,
    textOnBackground: theme.background.includes('900') || theme.background.includes('800') ? 'text-zinc-100' : 'text-gray-900',
    textOnCard: theme.card === 'white' ? 'text-gray-900' : 'text-zinc-100',
    accentText: 'text-white', // assuming accent is dark, text white
  };
}