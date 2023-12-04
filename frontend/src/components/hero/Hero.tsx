import { Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Hero.scss";

interface HeroProps {
  movies: never[];
}

const Hero = ({ movies }: HeroProps) => {
  return (
    <div className="component__hero-container">
      <Carousel>
        {movies.map((movie: any) => (
          <Paper key={movie.imdbId}>
            <div className="component__hero-card-container">
              <div
                className="component__hero-card"
                style={{ "--img": `url(${movie.backdrops[0]})` }}
              >
                <div className="component__hero-poster">
                  <img src={movie.poster} alt="" />
                </div>
                <div className="component__hero-title">
                  <h3>{movie.title}</h3>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
