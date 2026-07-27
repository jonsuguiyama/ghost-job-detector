import { cityBreakdown } from '../lib/cityData';

const MAX_VALUE = Math.max(...cityBreakdown.map((d) => d.value));

export default function CityBarChart({ title, style }) {
  return (
    <div className="city-chart" style={style}>
      <p className="section-title">{title}</p>
      <div className="city-chart-rows">
        {cityBreakdown.map((row) => (
          <div className="city-chart-row" key={row.city}>
            <span className="city-chart-label">{row.city}</span>
            <div className="city-chart-track">
              <div
                className="city-chart-fill"
                style={{ width: `${(row.value / MAX_VALUE) * 100}%` }}
              />
            </div>
            <span className="city-chart-value">{row.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
