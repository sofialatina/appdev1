function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      style={{
        width: "150px",
        height: "150px",
        margin: "10px",
      }}
    />
  );
}

export default function Gallery() {
  return (
    <div
      style={{
        height: "100vh",           // full screen height
        width: "100vw",            // full screen width
        display: "flex",           // use flexbox
        justifyContent: "center",  // horizontal center
        alignItems: "center",      // vertical center
        backgroundColor: "#222",   // dark background (optional)
      }}
    >
      <section
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "2rem" }}>
          Amazing Scientists
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Profile />
          <Profile />
          <Profile />
        </div>
      </section>
    </div>
  );
}
