import type { GitHubRepo } from "../types/github.types";

interface Props {
  repos: GitHubRepo[];
}

const COLORS = [
  { from: "#6366f1", to: "#8b5cf6" },
  { from: "#0ea5e9", to: "#06b6d4" },
  { from: "#10b981", to: "#34d399" },
  { from: "#f59e0b", to: "#fbbf24" },
  { from: "#ef4444", to: "#f97316" },
  { from: "#ec4899", to: "#a855f7" },
];

function LanguageChart({ repos }: Props) {
  const languageMap: Record<string, number> = {};

  repos.forEach((repo) => {
    const language = repo.language;
    if (!language) return;
    languageMap[language] = (languageMap[language] || 0) + 1;
  });

  const totalRepos = Object.values(languageMap).reduce(
    (sum, count) => sum + count,
    0
  );

  const chartData = Object.entries(languageMap)
    .map(([name, value]) => ({
      name,
      value,
      percentage: ((value / totalRepos) * 100).toFixed(1),
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);

  if (chartData.length === 0) return null;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: "24px",
        padding: "28px",
        marginBottom: "32px",
        boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "28px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 8px #6366f1",
              }}
            />
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#f1f5f9",
                margin: 0,
                letterSpacing: "-0.3px",
              }}
            >
              Language Distribution
            </h2>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "#64748b",
              margin: 0,
              paddingLeft: "18px",
            }}
          >
            Based on public repositories
          </p>
        </div>

        <div
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            color: "#a5b4fc",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.2px",
          }}
        >
          {totalRepos} repos
        </div>
      </div>

      {/* Bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {chartData.map((language, index) => {
          const color = COLORS[index % COLORS.length];
          return (
            <div key={language.name}>
              {/* Label row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "3px",
                      background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#e2e8f0",
                    }}
                  >
                    {language.name}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#475569",
                      background: "rgba(255,255,255,0.04)",
                      padding: "2px 7px",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {language.value} repos
                  </span>
                </div>

                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: color.from,
                    minWidth: "40px",
                    textAlign: "right",
                  }}
                >
                  {language.percentage}%
                </span>
              </div>

              {/* Track */}
              <div
                style={{
                  height: "6px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "999px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Filled bar */}
                <div
                  style={{
                    height: "100%",
                    width: `${language.percentage}%`,
                    borderRadius: "999px",
                    background: `linear-gradient(90deg, ${color.from}, ${color.to})`,
                    boxShadow: `0 0 8px ${color.from}66`,
                    transition: "width 0.6s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "24px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {chartData.map((language, index) => {
          const color = COLORS[index % COLORS.length];
          return (
            <div
              key={language.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "4px 10px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  fontWeight: 500,
                }}
              >
                {language.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LanguageChart;