import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from './kibo-ui/contribution-graph';

const API_URL = 'https://github-contributions-api.jogruber.de/v4/chinmayjjg?format=nested';
const GITHUB_LEVEL_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const flattenNestedContributions = (source) => {
  if (!source || typeof source !== 'object') {
    return [];
  }

  const flattened = [];

  Object.entries(source).forEach(([year, months]) => {
    if (!months || typeof months !== 'object') {
      return;
    }

    Object.entries(months).forEach(([month, days]) => {
      if (!days || typeof days !== 'object') {
        return;
      }

      Object.entries(days).forEach(([day, value]) => {
        const count = typeof value === 'number' ? value : value?.count ?? 0;
        const level = typeof value === 'number' ? 0 : value?.level ?? 0;

        flattened.push({
          date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
          count,
          level,
        });
      });
    });
  });

  return flattened.sort((a, b) => a.date.localeCompare(b.date));
};

const normalizeContributions = (payload) => {
  const rawContributions = Array.isArray(payload?.contributions)
    ? payload.contributions
    : flattenNestedContributions(payload?.contributions);

  return rawContributions
    .filter((entry) => entry?.date)
    .map((entry) => ({
      date: entry.date,
      count: Number(entry.count) || 0,
      level: Number(entry.level) || 0,
    }));
};

const getLatestYear = (totals, contributions) => {
  const totalYears = Object.keys(totals || {}).map(Number).filter(Boolean);

  if (totalYears.length > 0) {
    return Math.max(...totalYears);
  }

  const contributionYears = contributions
    .map((entry) => Number(entry.date.slice(0, 4)))
    .filter(Boolean);

  return contributionYears.length > 0 ? Math.max(...contributionYears) : new Date().getFullYear();
};

const GitHubContributions = () => {
  const [state, setState] = useState({
    loading: true,
    error: '',
    contributions: [],
    totals: {},
    username: 'chinmayjjg',
  });

  useEffect(() => {
    let isMounted = true;

    const loadContributions = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch contributions (${response.status})`);
        }

        const payload = await response.json();

        if (!isMounted) {
          return;
        }

        setState({
          loading: false,
          error: '',
          contributions: normalizeContributions(payload),
          totals: payload?.total || {},
          username: payload?.username || 'chinmayjjg',
        });
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setState((current) => ({
          ...current,
          loading: false,
          error: error.message || 'Unable to load GitHub contributions right now.',
        }));
      }
    };

    loadContributions();

    return () => {
      isMounted = false;
    };
  }, []);

  const latestYear = useMemo(
    () => getLatestYear(state.totals, state.contributions),
    [state.totals, state.contributions]
  );

  const latestYearContributions = useMemo(
    () => state.contributions.filter((entry) => Number(entry.date.slice(0, 4)) === latestYear),
    [latestYear, state.contributions]
  );

  const latestYearTotal = state.totals?.[latestYear] ?? latestYearContributions.reduce((sum, entry) => sum + entry.count, 0);

  return (
    <section className="section contributions-section" id="contributions">
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>

        <motion.div
          className="contributions-shell"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contributions-copy">
            <span className="contributions-eyebrow">Live from GitHub</span>
            <h3>My coding streak, shipped as data instead of screenshots.</h3>
            <p>
              This graph pulls directly from the public GitHub contributions API for{' '}
              <a
                href={`https://github.com/${state.username}`}
                target="_blank"
                rel="noreferrer"
              >
                @{state.username}
              </a>
              , so it stays current as I keep building.
            </p>
          </div>

          <div className="contributions-card">
            {state.loading ? (
              <div className="contributions-status">Loading contribution graph...</div>
            ) : state.error ? (
              <div className="contributions-status contributions-status-error">
                {state.error}
              </div>
            ) : (
              <>
                <div className="contributions-summary">
                  <div>
                    <span className="contributions-summary-label">Latest year</span>
                    <strong>{latestYear}</strong>
                  </div>
                  <div>
                    <span className="contributions-summary-label">Contributions</span>
                    <strong>{latestYearTotal}</strong>
                  </div>
                </div>

                <ContributionGraph
                  data={latestYearContributions}
                  blockMargin={5}
                  blockRadius={3}
                  blockSize={13}
                  className="contribution-graph-widget"
                  labels={{
                    totalCount: '{{count}} contributions in {{year}}',
                    legend: {
                      less: 'Quiet',
                      more: 'Busy',
                    },
                  }}
                  totalCount={latestYearTotal}
                >
                  <ContributionGraphCalendar>
                    {({ activity, dayIndex, weekIndex }) => (
                      <ContributionGraphBlock
                        activity={activity}
                        dayIndex={dayIndex}
                        weekIndex={weekIndex}
                        className='contribution-graph-block data-[level="0"]:fill-[#161b22] data-[level="1"]:fill-[#0e4429] data-[level="2"]:fill-[#006d32] data-[level="3"]:fill-[#26a641] data-[level="4"]:fill-[#39d353]'
                      />
                    )}
                  </ContributionGraphCalendar>
                  <ContributionGraphFooter className="contribution-graph-footer">
                    <ContributionGraphTotalCount />
                    <ContributionGraphLegend>
                      {({ level }) => (
                        <svg height="13" width="13">
                          <rect
                            width="13"
                            height="13"
                            rx="3"
                            ry="3"
                            fill={GITHUB_LEVEL_COLORS[level]}
                            stroke="rgba(255,255,255,0.08)"
                          />
                        </svg>
                      )}
                    </ContributionGraphLegend>
                  </ContributionGraphFooter>
                </ContributionGraph>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubContributions;
