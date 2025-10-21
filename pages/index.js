import { useEffect, useState } from "react";

export default function Home() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tickets, setTickets] = useState(null);

  // Données de démonstration
  const FALLBACK = [
    {
      id: "nhl-1",
      sport: "NHL",
      league: "NHL",
      date: "2025-10-22 02:00",
      home: "Rangers",
      away: "Capitals",
      main_probs: "Home:59% · Away:41%",
      main_odds: "H:1.75 · A:2.10",
      best_edge: 0.03,
    },
    {
      id: "nhl-2",
      sport: "NHL",
      league: "NHL",
      date: "2025-10-22 03:00",
      home: "Calgary Flames",
      away: "St. Louis Blues",
      main_probs: "Home:51% · Away:49%",
      main_odds: "H:1.95 · A:1.95",
      best_edge: 0.01,
    },
    {
      id: "foot-1",
      sport: "FOOT",
      league: "Ligue 1",
      date: "2025-10-22 21:00",
      home: "PSG",
      away: "OM",
      main_probs: "1:64% · N:21% · 2:15%",
      main_odds: "1:1.55 · N:4.20 · 2:6.00",
      best_edge: 0.04,
    },
  ];

  useEffect(() => {
    setMatches(FALLBACK);
    setLoading(false);
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1 style={{ marginBottom: 4 }}>🥚 Cocote — Foot & NHL</h1>
      <p style={{ color: "#555", marginTop: 0 }}>Pronos algorithmiques (démo)</p>

      <section style={{ marginTop: 24 }}>
        <h2>Matchs du jour</h2>
        {loading && <p>Chargement…</p>}
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        {!loading && !error && (
          <table width="100%" cellPadding="8" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th align="left">Date</th>
                <th align="left">Sport</th>
                <th align="left">Ligue</th>
                <th align="left">Match</th>
                <th align="right">Probas</th>
                <th align="right">Cotes</th>
                <th align="right">Edge</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m) => (
                <tr key={m.id} style={{ borderTop: "1px solid #eee" }}>
                  <td>{m.date}</td>
                  <td>{m.sport}</td>
                  <td>{m.league}</td>
                  <td>
                    <b>{m.home}</b> vs <b>{m.away}</b>
                  </td>
                  <td align="right">{m.main_probs}</td>
                  <td align="right">{m.main_odds}</td>
                  <td align="right">{(m.best_edge * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <footer style={{ marginTop: 48, color: "#666", fontSize: 12 }}>
        © {new Date().getFullYear()} Cocote — Jeu responsable (+18)
      </footer>
    </main>
  );
}
