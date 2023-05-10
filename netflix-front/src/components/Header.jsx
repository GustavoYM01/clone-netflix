import React from "react";
import styled from "styled-components";
import logo from "../imgs/netflix-logo.png";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();

  return props.isVisible ? (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="Logo da Netflix" />
      </div>
      {!props.noBtn && (
        <button onClick={() => navigate(props.login ? "/entrar" : "/cadastro")}>
          {props.login ? "Entrar" : "Cadastre-se"}
        </button>
      )}
    </Container>
  ) : null;
}

const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: #fff;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
