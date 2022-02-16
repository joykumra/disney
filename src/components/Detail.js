import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getDocs(collection(db, "movies"));
        response.forEach((movie) => {
          if (movie.id === id) {
            setDetailData({ ...movie.data() });
          }
        });
      } catch (err) {
        alert(err.message);
      }
    };

    fetchMovie();
  }, [id]);

  const { backgroundImg, titleImg, subTitle, title, description } = detailData;

  return (
    <Container>
      <Background>
        <img src={backgroundImg} alt={title}></img>
      </Background>
      <ImgTitle>
        <img src={titleImg} alt={title} />
      </ImgTitle>
      <Content>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play"></img>
            <span>play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="" />
          </GroupWatch>
        </Controls>
        <SubTitle>{subTitle}</SubTitle>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 30vw;
  min-height: 170px;
  margin: 0 auto;

  img {
    width: clamp(200px, 35vw, 600px);
  }
`;

const Content = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-right: 22px;
  height: 56px;
  padding: 0 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: rgb(249, 249, 249);
  color: black;

  img {
    width: 32px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin-right: 10px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background-color: rgb(50, 50, 50);
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translateX(1px);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px);
    }
  }
`;

const GroupWatch = styled(AddList)`
  img {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
