function DonutValue({ value, percent }) {
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
      <span className="donut-percent">{value}</span>
    </div>
  );
}

function DonutTile({ value, label, source, percent }) {
  return (
    <div className="stat-tile-row">
      <DonutValue value={value} percent={percent} />
      <div className="stat-tile-row-text">
        <p className="stat-tile-label">{label}</p>
        <p className="stat-tile-source">{source}</p>
      </div>
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

export default function StatTile({ value, label, source, span = 1, chart, percent, style }) {
  const resolvedPercent = percent ?? Number.parseFloat(value);
  const tileStyle = { gridColumn: `span ${span}`, ...style };

  if (chart === 'donut') {
    return (
      <div className="stat-tile" style={tileStyle}>
        <DonutTile value={value} label={label} source={source} percent={resolvedPercent} />
      </div>
    );
  }

  return (
    <div className="stat-tile" style={tileStyle}>
      {chart === 'bar' && <BarValue value={value} percent={resolvedPercent} />}
      {!chart && <p className="stat-tile-value">{value}</p>}
      <p className="stat-tile-label">{label}</p>
      <p className="stat-tile-source">{source}</p>
    </div>
  );
}
