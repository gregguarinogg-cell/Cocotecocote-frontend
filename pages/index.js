export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      marginTop: "100px"
    }}>
      <h1>🐔 Bienvenue sur Cocote !</h1>
      <p>Application de prédiction Foot & NHL</p>
      <button
        style={{
          background: "#ffcc00",
          border: "none",
          padding: "12px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          marginTop: "20px"
        }}
      >
        🎟 Générer mes tickets
      </button>
    </div>
  );
}
