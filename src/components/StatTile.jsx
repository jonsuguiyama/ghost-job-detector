export default function StatTile({ value, label, source, size = 'sm' }) {
  return (
    <div className={`stat-tile stat-tile--${size}`}>
      <p className="stat-tile-value">{value}</p>
      <p className="stat-tile-label">{label}</p>
      <p className="stat-tile-source">{source}</p>
    </div>
  );
}
