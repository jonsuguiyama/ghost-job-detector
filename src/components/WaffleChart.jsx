const TOTAL_DOTS = 100;

export default function WaffleChart({ percent, label, source }) {
  const filled = Math.round((percent / 100) * TOTAL_DOTS);

  return (
    <div className="stat-tile waffle-tile">
      <div className="waffle-grid">
        {Array.from({ length: TOTAL_DOTS }, (_, i) => (
          <span key={i} className={`waffle-dot${i < filled ? ' waffle-dot--filled' : ''}`} />
        ))}
      </div>
      <p className="stat-tile-value waffle-value">{percent}%</p>
      <p className="stat-tile-label">{label}</p>
      <p className="stat-tile-source">{source}</p>
    </div>
  );
}
