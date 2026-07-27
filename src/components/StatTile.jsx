function DonutValue({ percent }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="donut-wrap">
      <svg viewBox="0 0 80 80" className="donut-svg">
        <circle cx="40" cy="40" r={radius} className="donut-track" />
        <circle
          cx="40" cy="40" r={radius}
          className="donut-fill"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="donut-percent">{percent}%</span>
    </div>
  );
}

function BarValue({ value, percent }) {
  return (
    <>
      <p className="stat-tile-value">{value}</p>
      <div className="mini-bar-track">
        <div className="mini-bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </>
  );
}

export default function StatTile({ value, label, source, span = 1, chart }) {
  const percent = Number.parseFloat(value);

  return (
    <div className="stat-tile" style={{ gridColumn: `span ${span}` }}>
      {chart === 'donut' && <DonutValue percent={percent} />}
      {chart === 'bar' && <BarValue value={value} percent={percent} />}
      {!chart && <p className="stat-tile-value">{value}</p>}
      <p className="stat-tile-label">{label}</p>
      <p className="stat-tile-source">{source}</p>
    </div>
  );
}
