import React, { Fragment, useContext, useEffect, useState } from "react";
import HomeLogin from "../../layouts/home/home";
import { Modal } from "../../components/modal-form";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import { firebase } from "../../firebase/firebase";
import { Context } from "../../context/context";
import { Hero, Submit,Select  } from "./style";
import FakeSelect from './componentes/select'
import { MessageErrorComponent } from '../../components/messageError'
import { Navigate } from "react-router-dom";
import history from "../../config/history";

export default function SelectHero() {

 
const [error,setError] = useState(false)

  const background = () => {
    document.body.style.backgroundColor = "#00113d";

    return () => {
      document.body.style.backgroundColor = "";
    };
  };

  const handlePerfil = (e) => {
    e.preventDefault()

    if(document.querySelector('#image').value !== ''){
        history.push('/perfil')
        location.reload()
        return
    } else {
      setError(true)
    }
  }
  useEffect(() => {
    background();
  }, []);

  return (
    <Fragment>
      <HomeLogin>
        <div>
        <Modal>
          <section>
            <Hero>
              <div>
                <h1>
                  Selecione o seu agente mais legal<strong>.</strong>
                </h1>
              </div>
              <div>
                <p>Tenha a visão completa do seu agente.</p>
              </div>
              <div>
                <form method="post">
                  <div>
                    <FakeSelect />
                    {error ? (
                    <MessageErrorComponent> Selecione um personagem para continuar</MessageErrorComponent>
                    ): ''
                    }           
                  </div>
                  <Submit>
                    <button onClick={handlePerfil} className="selecionar">Entrar</button>
                  </Submit>
                </form>
              </div>
            </Hero>
          </section>
        </Modal>
        </div>
      </HomeLogin>
    </Fragment>
  );
}
