import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <div className="about-header">
          <h1>About Me</h1>
          <img
            src="src/assets/kazuha.gif"
            alt="Fun Fact Image"
            className="fun-fact-image"
          />
        </div>
        <p className="name">Latina, Sofia Isabel I.</p>
        <p className="course">BS in Information Systems 3-A</p>
      </header>

      <section>
        <h2>Fun Fact</h2>
        <p>I try my all, even when there's an error.</p>
      </section>

      <section>
        <h1>Why I Want to Learn React</h1>
        <p>
          I want to learn React because I want to incorporate the designs that I can think of and share it to my friends.
        </p>
      </section>
    </div>
  )
}

export default App
