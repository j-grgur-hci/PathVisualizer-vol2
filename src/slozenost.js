import React from 'react';
import {Grid} from '@mui/material';
import slozenostSlika from './images/slozenost.png'
import okvirSlozenost from './images/slozenostPrimjer.png'
import './komponenta.css'
const Slozenost=()=>{
    return(
        <div class="komponenta" id="slozenost" style={{display:'none'}}>
         <img src={slozenostSlika} style={{marginLeft:'auto',marginRight:'auto',marginTop:'2rem',marginBottom:'4rem',display: 'block',width:'100%', }} alt='slozenost header'/>
           <Grid container spacing={4} direction="row" >
        <Grid item xs={6} >
                    <h5 style={{marginLeft:'2rem'}} id='h5v_slozenost'></h5>
                    <h5 style={{marginLeft:'2rem'}} id='h5p_slozenost'></h5>
        </Grid>
        <Grid item xs={6} >
                    <img src={okvirSlozenost} style={{marginLeft:'5rem'}} alt='okvir za sliku slozenosti'/>
        </Grid>

    </Grid>


        </div>

)}

export default Slozenost;