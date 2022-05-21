import React from 'react';
import {Grid} from '@mui/material';
import pseudoSlika from './images/pseudokod.png';
import okvir from './images/okvirPseudokod.png';
import bla from './images/algorithm_img/dfs_pseudo.png'
import './komponenta.css'

const Pseudokod=()=>{

return(
    <div class='komponenta' id='pseudokod' style={{display:'none'}}>
        <img src={pseudoSlika} style={{marginLeft:'auto',marginRight:'auto',marginTop:'2rem',marginBottom:'4rem',display: 'block',width:'100%', }} alt='pseudokod header'/>
    <Grid container spacing={4} direction="row" >
        <Grid item xs={6}>
            <div style={{position:'relative'}}>
                    <img src={okvir} style={{marginLeft:'2rem',position:'relative', top:'0',left:'0'}} alt='okvir za sliku pseudokoda'/>
                    <img src='' alt='pseudo_img' id='pseudo_slika' style={{marginLeft:'4rem',position: 'absolute',top:'4rem', left:'1rem'}}/>
            </div>
                    </Grid>
        <Grid item xs={6}>
                    <h5 style={{marginRight:'2rem'}} id='h5_pseudo'></h5>
                    <ul id='pseudo_lista'></ul>
        </Grid>
    </Grid>

    </div>

)}


export default Pseudokod;