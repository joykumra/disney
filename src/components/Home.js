import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../features/movie/movieSlice";

import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.name);
  let recommends = [];
  let newDisney = [];
  let trending = [];
  let originals = [];

  useEffect(() => {
    getDocs(collection(db, "movies"))
      .then((movies) =>
        movies.forEach((result) => {
          const movie = result.data();
          if (movie.type === "recommend") {
            recommends = [...recommends, { id: result.id, ...movie }];
          }

          if (movie.type === "new") {
            newDisney = [...newDisney, { id: result.id, ...movie }];
          }

          if (movie.type === "trending") {
            trending = [...trending, { id: result.id, ...movie }];
          }

          if (movie.type === "original") {
            originals = [...originals, { id: result.id, ...movie }];
          }

          dispatch(
            movieActions.setMovies({
              recommends,
              originals,
              trending,
              newDisney,
            })
          );
        })
      )
      .catch((err) => alert(err.message));
  }, [userName]);

  return (
    <Container>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Recommends></Recommends>
      <NewDisney></NewDisney>
      <Originals></Originals>
      <Trending></Trending>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  top: 72px;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center/ cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
