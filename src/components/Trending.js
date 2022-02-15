import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Trending() {
  const movies = useSelector((state) => state.movie.trending);

  return (
    <Container>
      <h3>Trending</h3>
      <Content>
        {movies &&
          movies.map((movie, index) => {
            return (
              <Wrap key={index}>
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImg} alt={movie.title}></img>
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Trending;