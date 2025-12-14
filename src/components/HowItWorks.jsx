function HowItWorks() {
  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f2f2f2" }}>
      <h2 style={{ textAlign: "center" }}>How It Works</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={{ width: "200px", textAlign: "center" }}>
          <h3>1. Create Workspace</h3>
          <p>Set up your startup workspace in minutes.</p>
        </div>

        <div style={{ width: "200px", textAlign: "center" }}>
          <h3>2. Add Tasks</h3>
          <p>Organize tasks and goals for your team.</p>
        </div>

        <div style={{ width: "200px", textAlign: "center" }}>
          <h3>3. Track Progress</h3>
          <p>Monitor progress and stay aligned.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
