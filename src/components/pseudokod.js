import React from "react"
import { Grid } from "@mui/material"
import pseudoSlika from "../images/pseudokod.png"
import okvir from "../images/okvirPseudokod.png"
import "./components_css/komponenta.css"

const Pseudokod = () => {
  return (
    <div class="komponenta" id="pseudokod" style={{ display: "none" }}>
      <img
        src={pseudoSlika}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2rem",
          marginBottom: "4rem",
          display: "block",
          width: "100%",
        }}
        alt="pseudokod header"
      />
      <Grid container spacing={4} direction="row">
        <Grid item xs={6}>
          <div style={{ position: "relative" }}>
            <img
              src={okvir}
              style={{
                  display:'block',
                marginLeft: "2rem",
                position: "relative",
                top: "0",
                left: "0",
              }}
              alt="okvir za sliku pseudokoda"
            />
            <img
              src={require("../images/pseudokod.png").default}
              alt="pseudo_img"
              id="pseudo_slika"
              style={{
                display:'block',
                marginLeft: "4rem",
                position: "absolute",
                top: "3rem",
                left: "1rem",
                maxWidth:'478px',
                maxHeight:'418px'
              }}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <h5
            style={{ marginRight: "2rem", fontSize: "1.25rem" }}
            id="h5_pseudo"
          ></h5>
          <ul id="pseudo_lista" style={{ marginRight: "2rem" }}></ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default Pseudokod
