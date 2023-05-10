import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-conf";
import BgImg from "../components/BgImg";
import Header from "../components/Header";
import styled from "styled-components";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
      if (error.code.includes("user-not-found")) {
        alert("Usuário não cadastrado!");
      }
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BgImg noBg noBs h={100} />
      <Header isVisible noBtn />
      <div className="content">
        <div className="flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Entrar</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 10rem;
    left: 0;
    width: 100%;
    .form {
      display: flex;
      flex-wrap: wrap;
      max-width: 30rem;
      background: #000000b0;
      padding: 4rem;
      border-radius: 0.2rem;
      .title {
        align-self: flex-start;
        margin-bottom: 1.5rem;
        font-size: 2rem;
      }
      input {
        flex: 1;
        color: #fff;
        background-color: rgb(68, 68, 68);
        border: none;
        padding: 0.6rem;
        margin: 0 0 2rem 0;
        font-size: 1.2rem;
        border: 1px solid #000;
        border-radius: 0.2rem;
      }
      button {
        margin-left: 0.5rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: #fff;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
    button {
      padding: 0.5rem 2rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: #fff;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
      &:hover {
        background-color: #b40009;
      }
    }
  }
`;
