function Profile() {
  return (
    <img
src="https://i.imgur.com/QIrZWGIs.jpg"
alt="Alan L. Hart"
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
        height: "100vh",           
        width: "100vw",            
        display: "flex",           
        justifyContent: "center",  
        alignItems: "center",      
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
