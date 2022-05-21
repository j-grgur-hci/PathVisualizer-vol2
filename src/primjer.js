import React from 'react';
import {Grid} from '@mui/material';
import primjerSlika from './images/primjer.png'
import okvirPrimjer from './images/okvirPrimjer.png'
import './komponenta.css'
const Primjer=()=>{
    return(
        <div class="komponenta" id="primjer" style={{display:'none'}}>
         <img src={primjerSlika} style={{marginLeft:'auto',marginRight:'auto',marginTop:'2rem',marginBottom:'4rem',display: 'block',width:'100%', }} alt='primjer header'/>
           <Grid container spacing={4} direction="row" >
        <Grid item xs={6} >
                    <h5 style={{marginLeft:'2rem'}} id='h5_primjer'></h5>
        </Grid>
        <Grid item xs={6} >
                    <img src={okvirPrimjer} style={{marginRight:'2rem'}} alt='okvir za sliku primjera' />
        </Grid>

    </Grid>


        </div>

)}

export default Primjer;