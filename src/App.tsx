import React from 'react'
import HomeIcon from './assets/ico_home.svg'

export function App() {
  return (
  <>
    <header>
      <h1>Photo Gallery</h1> 
      <h2>A Preview of What Someone Else Enjoys</h2>
    </header>

    <main>
      <nav>
        <img src={HomeIcon} alt="Icon of a house" />
        <h3>Home</h3>
      </nav>
    </main>
  </>
  )
}
