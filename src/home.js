import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './home.css'
import Arrow from "./images/Arrow.png"

const Home =()=>{
    return(
    <div>
     <div class="navigation">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <h5>Pseudokod</h5>
                                <img src={Arrow}/>
                            </div>
                            <div className="col ">
                                <h5>Primjer</h5>
                                <img src={Arrow}/>
                            </div>
                            <div className="col">
                                <h5>Vremenska i prostorna složenost</h5>
                                <img src={Arrow}/>
                            </div>
                            <div className="col">
                                <h5>Primjena</h5>
                                <img src={Arrow}/>
                            </div>
                            </div>
            </div>
    </div>
    </div>
    )
}

export default Home;