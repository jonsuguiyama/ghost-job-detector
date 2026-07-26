export default function StatTile({ value, label, source, span = 1 }) {
  return (
    <div className="stat-tile" style={{ gridColumn: `span ${span}` }}>
      <p className="stat-tile-value">{value}</p>
      <p className="stat-tile-label">{label}</p>
      <p className="stat-tile-source">{source}</p>
    </div>
  );
}
