import React from 'react';
import {Grid} from '@mui/material';
import './navigation.css'
import Arrow from "./images/Arrow.png"

const Navigation =()=>{
    return(
    <div>
     <div class="navigation">
         
                   <Grid container spacing={0} direction="row" >
                    <Grid item xs={3} >
                                <h5 style={{margin:'0rem'}}>Pseudokod</h5>
                                <img src={Arrow}/>
                    </Grid>
                    <Grid item xs={3}>
                                <h5 style={{marginBottom:'0rem', marginTop:'2.5rem'}}>Primjer</h5>
                                <img src={Arrow}/>
                    </Grid>
                    <Grid item xs={3}>
                                <h5 style={{marginBottom:'0rem', marginTop:'5rem'}}>Vremenska i prostorna složenost</h5>
                                <img src={Arrow}/>
                    </Grid>
                    <Grid item xs={3}>
                                <h5 style={{marginBottom:'0rem', marginTop:'9.5rem', paddingLeft:'1rem'}}>Primjena</h5>
                                <img src={Arrow} style={{ paddingLeft:'1rem'}}/>
                    </Grid>
                    </Grid>
    </div>
    </div>
    )
}

export default Navigation;