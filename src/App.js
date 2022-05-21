import React from 'react'
import PathFind from './grid'
import Navigation from './components/navigation'
import Pseudokod from './components/pseudokod'
import Primjer from './components/primjer'
import Slozenost from './components/slozenost'
import Primjena from './components/primjena'
import {BrowserRouter} from 'react-router-dom'
const App=()=>{
   return( 
     <BrowserRouter>
   <div>
     <PathFind />
     <Navigation/>
     <Pseudokod />
     <Primjer/>
     <Slozenost/>
     <Primjena/>
    </div>
     </BrowserRouter>
)}
export default App;