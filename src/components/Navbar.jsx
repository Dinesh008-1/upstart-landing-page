function Navbar() {
  return (
    <nav
      style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
      }}
    >
      <h2 style={{ fontSize: "32px", fontWeight: "600" }}>Upstart</h2>
      <button>Get Started</button>
    </nav>
  );
}

export default Navbar;
