import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import '../styles/ContributionGraph.css';

const ContributionGraph = ({ username, year = new Date().getFullYear(), theme = 'github' }) => {
  const [contributions, setContributions] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!username) return;

    const fetchContributions = async () => {
      try {
        setLoading(true);
        const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de/v4/chinmayjjg?format=nested');
        const response = await fetch(url);
        const data = await response.json();
        setContributions(data.contributions || data);
      } catch (err) {
        setError(err.message);
        setSampleData();
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const setSampleData = () => {
    const data = {};
    const startDate = new Date(`${year-1}-01-01`);
    const endDate = new Date(`${year}-2-31`);
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      data[dateStr] = Math.floor(Math.random() * 5);
    }
    setContributions(data);
  };

  const { weeks, maxContributions } = useMemo(() => {
    if (!contributions) return { weeks: [], maxContributions: 0 };

    const weeks = [];
    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);

    const firstDay = new Date(startDate);
    firstDay.setDate(firstDay.getDate() - firstDay.getDay());

    let currentWeek = [];
    let max = 0;

    for (let d = new Date(firstDay); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      const count = contributions[dateStr] || 0;
      max = Math.max(max, count);

      currentWeek.push({ date: new Date(d), count, dateStr });

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) weeks.push(currentWeek);

    return { weeks, maxContributions: max };
  }, [contributions, year]);

  const getColor = (count) => {
    if (count === 0) return 'var(--contrib-0)';
    if (count <= 2) return 'var(--contrib-1)';
    if (count <= 4) return 'var(--contrib-2)';
    if (count <= 6) return 'var(--contrib-3)';
    return 'var(--contrib-4)';
  };

  const getMonthLabel = (date) => date.toLocaleDateString('en-US', { month: 'short' });

  const monthLabels = useMemo(() => {
    const labels = new Array(weeks.length).fill('');
    weeks.forEach((week, wi) => {
      const firstDay = week.find((d) => d && d.date);
      if (!firstDay) return;
      const monthLabel = getMonthLabel(firstDay.date);
      const prev = labels[wi - 1];
      if (wi === 0 || monthLabel !== prev) labels[wi] = monthLabel;
    });
    return labels;
  }, [weeks]);

  if (loading) return (
    <div className="contribution-graph contribution-graph-loading">
      <div className="spinner" />
      <p>Loading contribution data...</p>
    </div>
  );

  return (
    <div className="contribution-graph" data-theme={theme}>
      <motion.div className="graph-container" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="graph-header">
          <h3 className="graph-title">{year} Contributions</h3>
          {username && <p className="graph-subtitle">@{username}</p>}
        </div>

        <div className="graph-wrapper">
          <div className="graph-labels-month">
            <div />
            {monthLabels.map((m, i) => (
              <div key={i} className="month-label">{m}</div>
            ))}
          </div>

          <div className="graph-content">
            <div className="graph-labels-day">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="day-label">{d}</div>
              ))}
            </div>

            <div className="graph-preview">
              <div className="graph-grid">
                {weeks.map((week, wi) => (
                  <div key={wi} className="graph-week">
                    {week.map((day) => (
                      <motion.div key={day.dateStr} className="graph-day" style={{ backgroundColor: getColor(day.count) }} title={`${day.dateStr}: ${day.count} contributions`} whileHover={{ scale: 1.12, transition: { duration: 0.12 } }} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="graph-legend">
          <span className="legend-label">Less</span>
          <div className="legend-items">
            {[0,1,2,3,4].map(level => (
              <div key={level} className="legend-item" style={{ backgroundColor: `var(--contrib-${level})` }} title={`${level} contributions`} />
            ))}
          </div>
          <span className="legend-label">More</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ContributionGraph;
