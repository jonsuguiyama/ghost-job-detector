export default function GhostIcon({ size = 24, color = 'currentColor', eyeColor = '#1e1e1e' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M 6 28 Q 9.33 23 12.67 28 Q 16 23 19.33 28 Q 22.67 23 26 28 L 26 14 C 26 3 6 3 6 14 Z"
        fill={color}
      />
      <circle cx="12" cy="18" r="1.8" fill={eyeColor} />
      <circle cx="20" cy="18" r="1.8" fill={eyeColor} />
    </svg>
  );
}
