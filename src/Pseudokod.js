import React from 'react';
import {Grid} from '@mui/material';
import pseudoSlika from './images/pseudokod.png';
import okvir from './images/okvirPseudokod.png';
import Pathfind from './grid';
import './komponenta.css'

const Pseudokod=()=>{

return(
    <div className='komponenta' id='pseudokod' style={{display:'none'}}>
        <img src={pseudoSlika} style={{marginLeft:'auto',marginRight:'auto',marginTop:'2rem',marginBottom:'4rem',display: 'block',width:'100%', }} alt='pseudokod header'/>
    <Grid container spacing={4} direction="row" >
        <Grid item xs={6} >
                    <img src={okvir} style={{marginLeft:'2rem'}} alt='okvir za sliku pseudokoda'/>
                    </Grid>
        <Grid item xs={6}>
                    <h5 style={{marginRight:'2rem'}} id='h5_pseudo'></h5>
        </Grid>
    </Grid>

    </div>

)}


export default Pseudokod;