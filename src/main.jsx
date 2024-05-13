import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Sidebar } from './components/sidebar/Sidebar'
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Services } from './components/services/Services'
import { Hire } from './components/hire/Hire'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar></Sidebar>
    <main className='main'>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Hire></Hire>
    </main>
  </React.StrictMode>,
)
