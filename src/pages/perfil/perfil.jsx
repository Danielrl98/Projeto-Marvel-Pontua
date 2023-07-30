import React, { Fragment, useEffect, useState } from "react";
import Menu from "../../components/menu/menu";
import Search from "../../components/search/search";
import { Grid, Buttons, Header } from "./style";
import VisaoGeral from "./components/visaoGeral/visaoGeral";
import Teams from "./components/teams/teams";
import Powers from "./components/powers/powers";
import Species from "./components/species/Species";
import Authors from "./components/authors/autors";
import axios from "axios";
import md5 from "md5";

export default function Perfil(props) {

  const [idHeroSingle,setIdHeroSingle] = useState(0)

  const [exibirComponent, SetExibirComponent] = useState("A");
  const [id,setId] = useState(0)
  const [load,setLoad] = useState(true)

  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;
  const baseURL = process.env.BASE_URL;

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

 
  useEffect(() => {

    if(props.idhero){
      setIdHeroSingle(props.idhero)
      setId(props.idhero)
      if( id !== 0){
        requisicao()
      }
      
    } else {
      setId(1009610)

      if( id !== 0){
        requisicao()
      }
    }
    handleAlternate();
    
  }, [exibirComponent,id]);

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
              <button onClick={() => SetExibirComponent("B")} className="active">Time</button>
            ) 
            }
            {exibirComponent !== "B" && (
              <button onClick={() => SetExibirComponent("B")}>Time</button>
            )  
            }
            </li>
            <li>
            {exibirComponent === "C" && (
              <button onClick={() => SetExibirComponent("C")} className="active">Powers</button>
            ) 
            }
            {exibirComponent !== "C" && (
              <button onClick={() => SetExibirComponent("C")}>Powers</button>
            )  
            }
            </li>
            <li>
            {exibirComponent === "D" && (
              <button onClick={() => SetExibirComponent("D")} className="active">Species</button>
            ) 
            }
            {exibirComponent !== "D" && (
              <button onClick={() => SetExibirComponent("D")}>Species</button>
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
            {exibirComponent === "B" && <Teams character={character} />}
            {exibirComponent === "C" && <Powers />}
            {exibirComponent === "D" && <Species/>}
            {exibirComponent === "E" && <Authors id={id}  />}
          </div>
          </section>
        </div>
      </Grid>
    </Fragment>
  );
}
