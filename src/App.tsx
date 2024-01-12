import React from 'react'
import HomeIcon from './assets/ico_home.svg'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import { CategoryList } from './components/CategoryList'

export type PhotoItemType = {
  id: number | undefined
  name: string
  description: string
  photos: string[]
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
        <h3>Home</h3>
      </nav>

      <Router>
        <Routes>
            <Route path='/' element={<CategoryList/>} />
            {/* <Route path='/new' element={<NewPetPage/>} />
            <Route path='/items/:id' element={<PetItemPage/>}/>
            <Route path='/items/delete/:id' element={<GoodbyePetItemPage/>}/> */}
            <Route path='*' element={<p>Ooops, that URL is unknown.</p>}/>
        </Routes>
      </Router>
    </main>

    <h4>Made with 🫶🏽 in Florida</h4>
  </>
  )
}
