import React, { Fragment, useContext, useEffect, useState } from "react";
import Menu from "../../layouts/menu/menu";
import Search from "../../layouts/search/search";
import { Grid, Buttons, Header } from "./style";
import VisaoGeral from "./components/visaoGeral/visaoGeral";
import Series from "./components/series/series";
import Events from "./components/events/events";
import Authors from "./components/authors/autors";
import ComicsIndex from './components/comics/comicsIndex'
import axios from "axios";
import md5 from "md5";
import { publicKey, privateKey , baseURL } from "../../Auth/Auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebase } from "../../firebase/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Context } from "../../context/context";


export default function Perfil(props) {

  const [idHeroSingle,setIdHeroSingle] = useState(0)

  const [exibirComponent, SetExibirComponent] = useState("A");
  const [id,setId] = useState(0)
  const [load,setLoad] = useState(true)
  const [character,setCharacter] = useState([])
  
  const apiUrl = baseURL + `/v1/public/characters/${id}`;
  
  const timestamp = new Date().getTime();

  const hash = md5(timestamp + privateKey + publicKey);

  async function requisicao(){
    let params = {
      ts: timestamp,
      apikey: publicKey,
      hash: hash,
      
    }
    await axios
      .get(apiUrl, { params } )
      .then((response) => {
        const characters = response.data.data.results;
       /* console.log(characters)*/
        setCharacter(characters)
        
      })
  }

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
    }
     else {
      SetExibirComponent("A");
    }
  }
  const auth = getAuth(firebase)
  const db = getFirestore(firebase)

  const { user, setUser } = useContext(Context);

  function requestUser() {

    console.log(user)
    if (user) {
      const result = doc(db, "users", user.uid);
   
      getDoc(result)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData2 = docSnapshot.data();
            console.log(userData2);
            setId(userData2.heroId)
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

    if(props.idhero){
      setIdHeroSingle(props.idhero)
      setId(props.idhero)
      if( id !== 0){
        requisicao()
      }
      
    } else {

      if( id !== 0){
        requisicao()
      }
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        requestUser();
        });
      return unsubscribe;
   
    }
    handleAlternate();
    
  }, [exibirComponent,id,user]);

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
              <h1>{ idHeroSingle ? 'Character' : 'Perfil'}</h1>
            </div>
            <div>
              <strong>/</strong>
            </div>
            <div>
              {load ? character.map( (data) => (
                <p key={data.id}>{data.name}</p>
              )): ''}
            </div>
          </Header>
          <Buttons>
            <li>
            {exibirComponent === "A" && (
              <button onClick={() => SetExibirComponent("A")} className="active">Visão Geral</button>
            ) 
            }
            {exibirComponent !== "A" && (
              <button onClick={() => SetExibirComponent("A")}>Visão Geral</button>
            )  
            }
            </li>
            <li>
            {exibirComponent === "B" && (
              <button onClick={() => SetExibirComponent("B")} className="active">Comics</button>
            ) 
            }
            {exibirComponent !== "B" && (
              <button onClick={() => SetExibirComponent("B")}>Comics</button>
            )  
            }
            </li>
            <li>
            {exibirComponent === "C" && (
              <button onClick={() => SetExibirComponent("C")} className="active">Series</button>
            ) 
            }
            {exibirComponent !== "C" && (
              <button onClick={() => SetExibirComponent("C")}>Series</button>
            )  
            }
            </li>
            <li>
            {exibirComponent === "D" && (
              <button onClick={() => SetExibirComponent("D")} className="active">Events</button>
            ) 
            }
            {exibirComponent !== "D" && (
              <button onClick={() => SetExibirComponent("D")}>Events</button>
            )  
            }
            </li>
            <li>
            {exibirComponent === "E" && (
              <button onClick={() => SetExibirComponent("DE")} className="active">Authors</button>
            ) 
            }
            {exibirComponent !== "E" && (
              <button onClick={() => SetExibirComponent("E")}>Authors</button>
            )  
            }
            </li>
          </Buttons>

          <div>
            {exibirComponent === "A" && <VisaoGeral character={character} />}
            {exibirComponent === "B" && <ComicsIndex character={character} />}
            {exibirComponent === "C" && <Series character={character}/>}
            {exibirComponent === "D" && <Events character={character}/>}
            {exibirComponent === "E" && <Authors id={id}  />}
          </div>
          </section>
        </div>
      </Grid>
    </Fragment>
  );
}
