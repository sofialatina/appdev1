function App() {
  const appStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '60vh',
    backgroundColor: '#ffffffff',
    fontFamily: 'Arial, sans-serif',
  };

  const imageStyle = {
    width: '380px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: 20,
  };

  const quoteStyle = {
    fontSize: '1.5em',
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    maxWidth: '600px',
    marginTop: '0',
    padding: '0 20px',
  };

  return (
    <div style={appStyle}>
      <img
        style={imageStyle}
        src="https://theculturednerd.org/wp-content/uploads/2020/04/Screenshot_20200417-145829_Chrome.jpg" 
        alt="Studio Ghibli"
      />
      <blockquote style={quoteStyle}>
        “Once you’ve met someone, you never really forget them.”
        <br />
        - Spirited Away 2001
      </blockquote>
    </div>
  );
}

export default App;