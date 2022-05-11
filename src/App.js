import React from 'react'
import PathFind from './grid'
import Navigation from './navigation'
import Pseudokod from './Pseudokod'
import Primjer from './primjer'
import Slozenost from './slozenost'
import Primjena from './primjena'
import {BrowserRouter} from 'react-router-dom'
const App=()=>{
   return( 
     <BrowserRouter>
   <div>
     <PathFind/>
     <Navigation/>
     <Pseudokod/>
     <Primjer/>
     <Slozenost/>
     <Primjena/>
    </div>
     </BrowserRouter>
)}
export default App;