import React from "react"
import { Grid } from "@mui/material"
import primjenaSlika from "../images/primjena.png"
import okvir from "../images/okvirPseudokod.png"
import "./components_css/komponenta.css"

const Primjena = () => {
  return (
    <div
      class="komponenta"
      style={{ paddingBottom: "2rem", display: "none" }}
      id="primjena"
    >
      <img
        src={primjenaSlika}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2rem",
          marginBottom: "4rem",
          display: "block",
          maxWidth: "100%",
          height: "auto",
        }}
        alt="pseudokod header"
      />
      <Grid container spacing={4} direction="row">
        <Grid item xs={6}>
          <img
            src={okvir}
            style={{ marginLeft: "2rem" }}
            alt="okvir za sliku primjene"
          />
          <img
            src={require("../images/primjena.png").default}
            alt="primjena_img"
            id="primjena_slika"
            style={{
              display: "block",
              marginLeft: "4rem",
              position: "absolute",
              top: "4rem",
              left: "1rem",
              maxWidth: "478px",
              maxHeight: "418px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <ul style={{ marginRight: "2rem" }} id="ul_primjena"></ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default Primjena
