import React from "react"
import { Grid } from "@mui/material"
import primjerSlika from "../images/primjer.png"
import okvirPrimjer from "../images/okvirPrimjer.png"
import "./components_css/komponenta.css"
const Primjer = () => {
  return (
    <div class="komponenta" id="primjer" style={{ display: "none" }}>
      <img
        src={primjerSlika}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2rem",
          marginBottom: "4rem",
          display: "block",
          width: "100%",
        }}
        alt="primjer header"
      />
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        {/* <Grid item xs={6}> */}
        {/* <h5
            style={{ marginLeft: "2rem", fontSize: "1.25rem" }}
            id="h5_primjer"
          ></h5> */}
        {/* </Grid> */}
        <Grid item xs={12} justify="center">
          <div style={{ position: "relative" }}>
            <img
              src={okvirPrimjer}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
                display: "block",
                position: "relative",
                top: "0",
              }}
              alt="okvir za sliku primjera"
            />
            {/* <img
              src={require("../images/pseudokod.png").default}
              alt="primjer_slika"
              id="primjer_slika"
              style={{
                marginRight: "2rem",
                position: "absolute",
                top: "4rem",
                right: "2rem",
                maxWidth: "488px",
                maxHeight: "358px",
              }} */}
            {/* /> */}
            <div className="ratio ratio-1x1">
              <iframe
                src={require("../images/pseudokod.png").default}
                id="primjer_video"
                title="Youtube video"
                allowFullScreen
                style={{
                  position: "absolute",
                  display: "block",
                  top: "2rem",
                  left: "27%",
                  width: "46vw",
                  height: "65vh",
                }}
              ></iframe>
              {/* <iframe src="https://www.youtube.com/embed/xNRJwmlRBNU" title="Youtube video" allowFullScreen style={{position:"absolute", display:"block", top:"2rem", left:"27%", width:"46vw", height:"65vh"}}></iframe> */}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Primjer
