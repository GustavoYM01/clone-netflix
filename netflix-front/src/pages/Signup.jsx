import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-conf";
import styled from "styled-components";
import Header from "../components/Header";
import BgImg from "../components/BgImg";
import Faq from "../components/Faq";
import img1 from "../imgs/1-left.png";
import img2 from "../imgs/2-right.png";
import img3 from "../imgs/3-left.png";
import img4 from "../imgs/4-right.png";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const topOffset = 50;

    currentScrollY > topOffset ? setIsVisible(false) : setIsVisible(true);
  };

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [email2, setEmail2] = useState("");
  const [password2, SetPassword2] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, []);

  return (
    <Container showPassword={showPassword}>
      <BgImg />
      <Header login isVisible={isVisible} />
      <div className="content">
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Filmes, séries e muito mais, sem limites</h1>
            <h6>Assista onde quiser. Cancele quando quiser.</h6>
            <h3>
              Quer assistir? Informe seu email para criar ou reiniciar sua
              assinatura.
            </h3>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Senha"
                name="senha"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Vamos lá</button>
            )}
          </div>
          {showPassword && <button onClick={handleSignIn}>Cadastrar</button>}
        </div>
      </div>
      <section className="imgsGrid">
        <div>
          <img src={img1} alt="Primeira Imagem" />
          <div>
            <p>Aproveite na TV</p>
            <p>
              Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              aparelhos de Blu-ray e outros dispositivos.
            </p>
          </div>
        </div>
        <div>
          <img src={img2} alt="Segunda Imagem" />
          <div>
            <p>Assista onde quiser</p>
            <p>
              Assista a quantos filmes e séries quiser no celular, tablet,
              laptop e TV.
            </p>
          </div>
        </div>
        <div>
          <img src={img3} alt="Terceira Imagem" />
          <div>
            <p>Crie perfis para crianças</p>
            <p>
              Deixe as crianças se aventurarem com seus personagens favoritos em
              um espaço feito só para elas, sem pagar a mais por isso.
            </p>
          </div>
        </div>
        <div>
          <img src={img4} alt="Quarta Imagem" />
          <div>
            <p>Baixe séries para assistir offline</p>
            <p>Disponíveis somente em planos sem anúncios.</p>
          </div>
        </div>
      </section>
      <Section>
        <Title>Perguntas frequentes</Title>
        <Faq
          question="O que é a Netflix?"
          answer={`A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. \n\nVocê pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.`}
        />
        <Faq
          question="Quanto custa a Netflix?"
          answer="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras."
        />
        <Faq
          question="Onde posso assitir?"
          answer={`Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. \n\nVocê também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.`}
        />
        <Faq
          question="Como faço para cancelar?"
          answer="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
        />
        <Faq
          question="O que eu posso assistir na Netflix?"
          answer="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."
        />
        <Faq
          question="A Netflix é adequada para crianças?"
          answer={`A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. \n\nO recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.`}
        />
      </Section>
      <CallToAction>
        <p>
          Quer assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        <div className="form">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
          />
          {showPassword2 && (
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={password2}
              onChange={(e) => SetPassword2(e.target.value)}
            />
          )}
          {!showPassword2 && (
            <button onClick={() => setShowPassword2(true)}>Vamos lá</button>
          )}
        </div>
        {showPassword2 && <button id="signupCTA">Cadastrar</button>}
      </CallToAction>
      <Footer>
        <div id="call">
          <p>Dúvidas? Ligue</p>
          <a href="">0800 591 8942</a>
        </div>
        <div className="links">
          <div>
            <ul>
              <li>
                <a href="">Perguntas frequentes</a>
              </li>
              <li>
                <a href="">Relações com investidores</a>
              </li>
              <li>
                <a href="">Formas de assistir</a>
              </li>
              <li>
                <a href="">Informações corporativas</a>
              </li>
              <li>
                <a href="">Só na Netflix</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Central de Ajuda</a>
              </li>
              <li>
                <a href="">Carreiras</a>
              </li>
              <li>
                <a href="">Termos de Uso</a>
              </li>
              <li>
                <a href="">Entre em contato</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Conta</a>
              </li>
              <li>
                <a href="">Resgatar cartão pré-pago</a>
              </li>
              <li>
                <a href="">Privacidade</a>
              </li>
              <li>
                <a href="">Teste de velocidade</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Media Center</a>
              </li>
              <li>
                <a href="">Comprar cartão pré-pago</a>
              </li>
              <li>
                <a href="">Preferências de cookies</a>
              </li>
              <li>
                <a href="">Avisos legais</a>
              </li>
            </ul>
          </div>
        </div>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    .body {
      gap: 1rem;
      align-items: flex-start;
      margin-left: calc(100% - 88%);
      .text {
        gap: 1rem;
        h1 {
          font-size: 4rem;
          max-width: 800px;
        }
        h6 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        h3 {
          font-weight: normal;
        }
      }
      .form {
        display: flex;
        flex-wrap: wrap;
        max-width: 30rem;
        input {
          flex: 1;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.6);
          border: none;
          padding: 0.6rem;
          margin: 0.1rem;
          font-size: 1.2rem;
          border: 1px solid #000;
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
  }
  .imgsGrid {
    padding: 0 6rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    position: relative;
    z-index: 999;
    top: -16rem;
    gap: 1rem;
    background: transparent;
    justify-content: center;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: radial-gradient(
        99.93% 134.44% at 17.93% 0%,
        #09143c 0%,
        #101338 57.21%,
        #400e20 99.57%
      );
      div {
        max-width: 74%;
        background: none;
        align-items: flex-start;
        p {
          font-size: 1.1rem;
          text-align: left;
          margin-bottom: 2rem;
          &:nth-child(1) {
            font-size: 2rem;
            font-weight: bold;
            margin: 0 0 1rem 0;
          }
        }
      }
    }
  }
`;

const Title = styled.h2`
  text-align: left;
  font-size: 3.6rem;
  margin-bottom: 1.2rem;
  color: #fff;
`;

const Section = styled.section`
  max-width: 80%;
  margin: -15rem auto 0 auto;
  padding: 5rem 0 1rem 0;
`;

const CallToAction = styled.div`
  max-width: 80%;
  margin: 0 auto 5rem auto;
  p {
    font-size: 1.2rem;
  }
  .form {
    display: flex;
    flex-wrap: wrap;
    max-width: 30rem;
    padding-top: 1rem;
    input {
      flex: 1;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.6);
      border: none;
      padding: 0.6rem;
      margin: 0.2rem;
      font-size: 1.2rem;
      border: 1px solid #000;
    }
    button {
      padding: 0.5rem 2rem;
      margin-left: 0.5rem;
      background-color: #e50914;
      border: none;
      border-radius: 0.2rem;
      cursor: pointer;
      color: #fff;
      font-weight: bolder;
      font-size: 1.05rem;
      &:hover {
        background-color: #b40009;
      }
    }
  }
  #signupCTA {
    margin-top: 1rem;
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
`;

const Footer = styled.footer`
  max-width: 80%;
  margin: 0 auto 10rem auto;
  div {
    color: #dddddd;
    a {
      &:visited {
        color: #dddddd;
      }
    }
  }
  #call {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  .links {
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    ul {
      li {
        list-style: none;
        margin-bottom: 0.8rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
