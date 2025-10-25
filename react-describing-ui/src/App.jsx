function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}


export default function PackingList() {
  return (
    <div
      style={{
        height: "100vh",           
        width: "100vw",            
        display: "flex",           
        justifyContent: "center",  
        alignItems: "center",      
        backgroundColor: "#222",   
      }}
    >
      <section
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
    </div>
  );
}