import React, { Fragment, useContext, useEffect, useState } from "react";
import Menu from "../../layouts/menu/menu";
import Search from "../../layouts/search/search";
import { Grid, Buttons, Header } from "./style";
import VisaoGeral from "./components/visaoGeral";
import Series from "./components/series";
import Events from "./components/events";
import { Authors } from "./components/authors/index";
import { ComicsIndex } from "./components/comic";
import axios from "axios";
import md5 from "md5";
import { publicKey, privateKey, baseURL } from "../../Auth/Auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebase } from "../../firebase/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Context } from "../../context/context";

export default function Perfil(props) {
  const [idHeroSingle, setIdHeroSingle] = useState(0);

  const [exibirComponent, SetExibirComponent] = useState("A");
  const [id, setId] = useState(0);
  const [load, setLoad] = useState(true);
  const [character, setCharacter] = useState([]);
  const [loadCharacter, setLoadCharacter] = useState(true);

  const requisicao = async () => {
    if (loadCharacter && id !== undefined) {
      const apiUrl = baseURL + `/v1/public/characters/${id}`;
      const timestamp = new Date().getTime();
      const hash = md5(timestamp + privateKey + publicKey);

      let params = {
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
      };

      const response = await axios.get(apiUrl, { params });

      try {
        const characters = response.data.data.results;
        setCharacter(characters);
        console.log(characters);
        setLoadCharacter(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  function handleAlternate() {
    if (exibirComponent === "A") {
      SetExibirComponent("A");
    } else if (exibirComponent === "B") {
      SetExibirComponent("B");
    } else if (exibirComponent === "C") {
      SetExibirComponent("C");
    } else if (exibirComponent === "D") {
      SetExibirComponent("D");
    } else if (exibirComponent === "E") {
      SetExibirComponent("E");
    } else {
      SetExibirComponent("A");
    }
  }
  const auth = getAuth(firebase);
  const db = getFirestore(firebase);

  const { user, setUser } = useContext(Context);

  function requestUser() {
    console.log(user);
    if (user) {
      const result = doc(db, "users", user.uid);

      getDoc(result)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData2 = docSnapshot.data();
            console.log(userData2);
            setId(userData2.heroId);
          } else {
            console.log("Dados do usuário não encontrados.");
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do usuário:", error);
        });
    }
  }
  useEffect(() => {
    if (props.idhero) {
      setIdHeroSingle(props.idhero);
      setId(props.idhero);
      if (id !== 0) {
        setTimeout(() => {
          requisicao();
        }, 300);
      }
    } else {
      if (id !== 0) {
        setTimeout(() => {
          requisicao();
        }, 300);
      }
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        requestUser();
      });
      return unsubscribe;
    }
    handleAlternate();
  }, [exibirComponent, id, user, loadCharacter]);

  return (
    <Fragment>
      <Grid>
        <div>
          <Menu />
        </div>
        <div>
          <Search hidden={false} />
          <section>
            <Header>
              <div>
                <h1>{idHeroSingle ? "Agente" : "Perfil"}</h1>
              </div>
              <div>
                <strong>/</strong>
              </div>
              <div>
                {load
                  ? character.map((data) => <p key={data.id}>{data.name}</p>)
                  : ""}
              </div>
            </Header>
            <Buttons>
              <li>
                {exibirComponent === "A" && (
                  <button
                    onClick={() => SetExibirComponent("A")}
                    className="active"
                  >
                    Visão Geral
                  </button>
                )}
                {exibirComponent !== "A" && (
                  <button onClick={() => SetExibirComponent("A")}>
                    Visão Geral
                  </button>
                )}
              </li>
              <li>
                {exibirComponent === "B" && (
                  <button
                    onClick={() => SetExibirComponent("B")}
                    className="active"
                  >
                    Quadrinhos
                  </button>
                )}
                {exibirComponent !== "B" && (
                  <button onClick={() => SetExibirComponent("B")}>
                    Quadrinhos
                  </button>
                )}
              </li>
              <li>
                {exibirComponent === "C" && (
                  <button
                    onClick={() => SetExibirComponent("C")}
                    className="active"
                  >
                    Séries
                  </button>
                )}
                {exibirComponent !== "C" && (
                  <button onClick={() => SetExibirComponent("C")}>
                    Séries
                  </button>
                )}
              </li>
              <li>
                {exibirComponent === "D" && (
                  <button
                    onClick={() => SetExibirComponent("D")}
                    className="active"
                  >
                    Eventos
                  </button>
                )}
                {exibirComponent !== "D" && (
                  <button onClick={() => SetExibirComponent("D")}>
                    Eventos
                  </button>
                )}
              </li>
              <li>
                {exibirComponent === "E" && (
                  <button
                    onClick={() => SetExibirComponent("DE")}
                    className="active"
                  >
                    Autores
                  </button>
                )}
                {exibirComponent !== "E" && (
                  <button onClick={() => SetExibirComponent("E")}>
                    Autores
                  </button>
                )}
              </li>
            </Buttons>

            <div>
              {exibirComponent === "A" && <VisaoGeral character={character} />}
              {exibirComponent === "B" && <ComicsIndex character={character} />}
              {exibirComponent === "C" && <Series character={character} />}
              {exibirComponent === "D" && <Events character={character} />}
              {exibirComponent === "E" && <Authors id={id} />}
            </div>
          </section>
        </div>
      </Grid>
    </Fragment>
  );
}
