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
          <div style={{ position: "relative" }}>
            <img
              src={okvir}
              style={{
                display: "block",
                marginLeft: "2rem",
                position: "relative",
                top: "0",
                left: "0",
              }}
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
                top: "3rem",
                left: "1rem",
                width: "478px",
                height: "338px",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <ul style={{ marginRight: "2rem" }} id="ul_primjena"></ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default Primjena
