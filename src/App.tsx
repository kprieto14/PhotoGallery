import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import { CategoryList } from './pages/CategoryList'
import { PhotoList } from './pages/PhotoList'
import { PhotoDetail } from './pages/PhotoDetail'
import { HomeButton } from './components/HomeButton'


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
      <HomeButton />

      <Routes>
          <Route path='/' element={<CategoryList/>} />
          <Route path='/:category' element={<PhotoList/>}/>
          <Route path='/:category/:id' element={<PhotoDetail/>}/>
          <Route path='*' element={<p>Ooops, that URL is unknown.</p>}/>
      </Routes>
    </main>

    <h4>Made with 🫶🏽 in Florida</h4>
  </>
  )
}
