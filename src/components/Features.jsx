function Features() {
  return (
    <section style={{ padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center" }}>Features</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
        style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "250px",
            borderRadius: "6px",
            backgroundColor: "#fff",
        }}
        >
          <h3>Task Management</h3>
          <p>Organize daily tasks and priorities easily.</p>
        </div>

        <div
        style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "250px",
            borderRadius: "6px",
            backgroundColor: "#fff",
        }}
        >
          <h3>Progress Tracking</h3>
          <p>Track milestones and startup growth clearly.</p>
        </div>

        <div
        style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "250px",
            borderRadius: "6px",
            backgroundColor: "#fff",
        }}
        >
          <h3>Team Collaboration</h3>
          <p>Keep your team aligned from one place.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
