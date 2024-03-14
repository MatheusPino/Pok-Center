import styled from "styled-components";

import loadingIcon from "./loadingIcon.png"

const Container = styled.div`
  /* Optional */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

const width = 60;
const height = 60;

const displacement = 20;

const translateTime = 3;
const rotateTime = 3;

const LoadingIcons = styled.div`
  position: relative;

  @keyframes translateLoadingIcon1 {
    0% {
      top: ${`${-height}px`};
      left: ${`${-width / 2}px`};
    }
    50% {
      top: ${`${-height - displacement}px`};
      left: ${`${-width / 2}px`};
    }
    100% {
      top: ${`${-height}px`};
      left: ${`${-width / 2}px`};
    }
  }

  @keyframes translateLoadingIcon2 {
    0% {
      top: ${`${-height / 2}px`};
      left: 0;
    }
    50% {
      top: ${`${-height / 2}px`};
      left: ${`${displacement}px`};
    }
    100% {
      top: ${`${-height / 2}px`};
      left: 0;
    }
  }

  @keyframes translateLoadingIcon3 {
    0% {
      top: 0;
      left: ${`${-width / 2}px`};
    }
    50% {
      top: ${`${displacement}px`};
      left: ${`${-width / 2}px`};
    }
    100% {
      top: 0;
      left: ${`${-width / 2}px`};
    }
  }

  @keyframes translateLoadingIcon4 {
    0% {
      top: ${`${-height / 2}px`};
      left: ${`${-width}px`};
    }
    50% {
      top: ${`${-height / 2}px`};
      left: ${`${-width - displacement}px`};
    }
    100% {
      top: ${`${-height / 2}px`};
      left: ${`${-width}px`};
    }
  }

  @keyframes rotationA {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes rotationB {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  img {
    position: absolute;
    width: ${`${width}px`};
    height: ${`${height}px`};
  }
  img.LoadingIcon1 {
    animation: rotationA ${`${rotateTime}s`} infinite,
      translateLoadingIcon1 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.LoadingIcon2 {
    animation: rotationB ${`${rotateTime}s`} infinite,
      translateLoadingIcon2 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.LoadingIcon3 {
    animation: rotationA ${`${rotateTime}s`} infinite,
      translateLoadingIcon3 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.LoadingIcon4 {
    animation: rotationB ${`${rotateTime}s`} infinite,
      translateLoadingIcon4 ${`${translateTime}s`} ease-in-out infinite;
  }
`;

export default function Loading() {
  return (
    <Container>
      <LoadingIcons>
        <img src={loadingIcon} alt="loadingIcon1" className="LoadingIcon1" />
        <img src={loadingIcon} alt="loadingIcon2" className="LoadingIcon2" />
        <img src={loadingIcon} alt="loadingIcon3" className="LoadingIcon3" />
        <img src={loadingIcon} alt="loadingIcon4" className="LoadingIcon4" />
      </LoadingIcons>
    </Container>
  );
}
