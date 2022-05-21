import React from "react"
import { Grid } from "@mui/material"
import { HashLink as Link } from "react-router-hash-link"
import "./components_css/navigation.css"
import "./components_css/komponenta.css"
import Arrow from "../images/Arrow.png"

const Navigation = () => {
  return (
    <div>
      <div class="navigation" style={{ display: "none" }}>
        <Grid container spacing={0} direction="row">
          <Grid item xs={3}>
            <Link to="#pseudokod" smooth style={{ textDecoration: "none" }}>
              {" "}
              <h5
                style={{ margin: "0rem", textDecoration: "none" }}
                class="option"
              >
                Pseudokod
              </h5>
              <img src={Arrow} alt="Arrow image" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="#primjer" smooth style={{ textDecoration: "none" }}>
              <h5
                style={{
                  marginBottom: "0rem",
                  marginTop: "2.5rem",
                  marginLeft: "0rem",
                }}
                class="option"
              >
                Primjer{" "}
              </h5>
              <img src={Arrow} alt="Arrow image" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="#slozenost" smooth style={{ textDecoration: "none" }}>
              <h5
                style={{ marginBottom: "0rem", marginTop: "5rem" }}
                class="option"
              >
                Vremenska i prostorna složenost
              </h5>
              <img src={Arrow} alt="Arrow image" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="#primjena" smooth style={{ textDecoration: "none" }}>
              <h5
                style={{
                  marginBottom: "0rem",
                  marginTop: "9.5rem",
                  marginLeft: "1rem",
                }}
                class="option"
              >
                Primjena
              </h5>
              <img
                src={Arrow}
                style={{ marginLeft: "1rem" }}
                alt="Arrow image"
              />
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Navigation
