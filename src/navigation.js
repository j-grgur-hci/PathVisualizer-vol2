import React from 'react';
import {Grid} from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import './navigation.css'
import Arrow from "./images/Arrow.png"

const Navigation =()=>{
    return(
    <div>
     <div class="navigation">
         
                   <Grid container spacing={0} direction="row" >
                    <Grid item xs={3} >
                                <h5 style={{margin:'0rem'}} class='option'> Pseudokod</h5>
                                <img src={Arrow} alt='Arrow image'/>
                    </Grid>
                    <Grid item xs={3}>
                                <h5 style={{marginBottom:'0rem', marginTop:'2.5rem'}} class='option' alt='Arrow image'>Primjer</h5>
                                <img src={Arrow}/>
                    </Grid>
                    <Grid item xs={3}>
                                <h5 style={{marginBottom:'0rem', marginTop:'5rem'}} class='option' alt='Arrow image'>Vremenska i prostorna složenost</h5>
                                <img src={Arrow}/>
                    </Grid>
                    <Grid item xs={3}>
                                <h5 style={{marginBottom:'0rem', marginTop:'9.5rem', paddingLeft:'1rem'}} class='option'>Primjena</h5>
                                <img src={Arrow} style={{ paddingLeft:'1rem'}} alt='Arrow image'/>
                    </Grid>
                    </Grid>
    </div>
    </div>
    )
}

export default Navigation;