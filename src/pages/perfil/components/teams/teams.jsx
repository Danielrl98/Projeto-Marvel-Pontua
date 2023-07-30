import React, { Fragment, useEffect, useState } from "react";
import { TeamsGrid } from "./style";

export default function Teams(props) {
  let teams = [
    "Avengers",
    "X-men",
    "Fantastic four",
    "S.H.I.E.L.D",
    "Runaways",
    "Guardians of the Galaxy",
    "Starforce",
    "The defenders",
    "Elementals",
    "Hydra",
    "Champions",
    "Warrios three",
  ];

  let newArray = [];

  const [character, setCharacter] = useState([]);
  const [load, setLoad] = useState(true);

  let itens = [
    {
      id: "1",
      teste: [
        {
          id: "teste",
        },
        {
          id: "2",
        },
      ],
    },
  ];

  useEffect(() => {
    request();
  }, [load]);

  function request() {
    let frase = props.character.map((e, i) => {
      let concat = e.events.items.concat(e.series.items);
      return concat.map((o) => o.name);
    });
    console.log(props.character);
    const regexNomes = teams.map((nome) => new RegExp(`\\b${nome}\\b`, "i"));

    const encontrado = teams.filter((nome, index) => {
      return frase.some((fras) => regexNomes[index].test(fras));
    });
    console.log(encontrado);
    if(encontrado.length == []){
      setLoad(false)
    }
    setCharacter(encontrado);
  }

  return (
    <Fragment>
      <TeamsGrid>
      {load ? character.map((char) => {
            return (
              <div key={char}>
                <ul>
                 <li>&nbsp;&bull; {char}</li>
                </ul>
              </div>
            );
          })
        : (<li>No Found Teams</li>)}
        </TeamsGrid>
    </Fragment>
  );
}
