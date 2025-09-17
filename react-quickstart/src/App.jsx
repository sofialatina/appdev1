import react, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout= () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Welcome to Studio Ghibli's App!</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome back, User!</h2>
          <img src="https://theculturednerd.org/wp-content/uploads/2020/04/Screenshot_20200417-145829_Chrome.jpg" alt="Logged In" />
          <br></br>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          <h2>Please log in.</h2>
          <img src="https://c4.wallpaperflare.com/wallpaper/764/209/100/movie-my-neighbor-totoro-mei-kusakabe-mini-totoro-my-neighbor-totoro-wallpaper-preview.jpg" alt="Logged Out" />
          <br></br>
          <button onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
);
}

export default App;