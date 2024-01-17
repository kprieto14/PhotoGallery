import React from 'react'
import HomeIcon from './assets/ico_home.svg'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import { CategoryList } from './pages/CategoryList'
import { PhotoList } from './pages/PhotoList'
import { PhotoDetail } from './pages/PhotoDetail'


//Defining type to grab from JSON file
export type GalleryItemType = {
  category: string
  title: string
  description: string
  photos: { title: string, imageURL: string }[]
}

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
        <button>Home</button>
      </nav>

      <Router>
        <Routes>
            <Route path='/' element={<CategoryList/>} />
            <Route path='/:category' element={<PhotoList/>}/>
            <Route path='/:category/:id' element={<PhotoDetail/>}/>
            <Route path='*' element={<p>Ooops, that URL is unknown.</p>}/>
        </Routes>
      </Router>
    </main>

    <h4>Made with 🫶🏽 in Florida</h4>
  </>
  )
}
