import React from "react";
import bg from "../imgs/bg-netflix.jpg";
import styled, { css } from "styled-components";

export default function BgImg(props) {
  const { noBg, noBs, h } = props;
  return <Container noBg={noBg} noBs={noBs} h={h}></Container>;
}

const Container = styled.div`
  height: ${(props) => (props.h ? `${props.h}vh` : "130vh")};
  width: 100%;
  ${(props) =>
    !props.noBs &&
    css`
      box-shadow: inset 0 -120px 50px -25px rgba(0, 7, 33, 1);
    `}
  ${(props) =>
    props.noBg
      ? css`
          background-image: url(${bg});
          &:before {
            /* adiciona camada de opacidade sobre a imagem de fundo */
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* define opacidade */
          }
        `
      : css`
          background-image: linear-gradient(
              103.24deg,
              rgba(0, 8, 29, 0.9) 23.83%,
              rgba(0, 8, 29, 0.3) 96.1%
            ),
            url(${bg});
        `};
  background-repeat: no-repeat;
  background-size: cover;
`;
