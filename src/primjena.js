import React from 'react';
import {Grid} from '@mui/material';
import primjenaSlika from './images/primjena.png';
import okvir from './images/okvirPseudokod.png'
import './komponenta.css'

const Primjena=()=>{
return(
    <div class="komponenta" style={{paddingBottom:'2rem'}} id="primjena">
        <img src={primjenaSlika} style={{marginLeft:'auto',marginRight:'auto',marginTop:'2rem',marginBottom:'4rem',display: 'block',maxWidth:'100%', height:'auto',  }} alt='pseudokod header'/>
    <Grid container spacing={4} direction="row" >
        <Grid item xs={6} >
                    <img src={okvir} style={{marginLeft:'2rem'}} alt='okvir za sliku primjene'/>
                    </Grid>
        <Grid item xs={6}>
                    <h5 style={{marginRight:'2rem'}}></h5>
        </Grid>

    </Grid>


    </div>

)}

export default Primjena;