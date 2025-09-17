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

  const user = {
    imageUrl: 'https://theculturednerd.org/wp-content/uploads/2020/04/Screenshot_20200417-145829_Chrome.jpg',
    imageSize: '380px',
    alignItems: 'center',
  };

  return (
    <div style={appStyle}>
      <h1>{user.imageUrl}</h1>
      <img
        src={user.imageUrl}
        alt="User"
        style={{ ...imageStyle, width: user.imageSize, height: user.imageSize }}
      />
    </div>
);
}

export default App;