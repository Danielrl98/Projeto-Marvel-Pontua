import React, { Fragment, useEffect, useState } from "react";
import { AuthorGrid } from "./style";
import axios from "axios";
import md5 from "md5";
import { publicKey, privateKey, baseURL } from "../../../../Auth/Auth";

export const Authors = (props) => {
  const id = props.id;

  const [character, setCharacter] = useState([]);

  const apiUrl = baseURL + `/v1/public/characters/${id}/comics`;

  const timestamp = new Date().getTime();

  const hash = md5(timestamp + privateKey + publicKey);

  async function requisicao() {
    let params = {
      ts: timestamp,
      apikey: publicKey,
      hash: hash,
    };
    await axios.get(apiUrl, { params }).then((response) => {
      const characters = response.data.data.results;

      setCharacter([characters[0]]);

      console.log(character);
    });
  }
  useEffect(() => {
    requisicao();
  }, []);

  return (
    <Fragment>
      <AuthorGrid>
        {character.length !== 0
          ? character.map((author) => {
              return (
                <div key={author.id}>
                  <ul>
                    <li>
                      {author.creators.items.map((creat) => {
                        return (
                          <div key={creat.name}>
                            <div>&nbsp;&bull; <a target="__blank" href={(creat.resourceURI).replace('gateway.marvel.com/v1/public/creators/','marvel.com/comics/creators/')   + '/' + (creat.name).replaceAll(' ','_')}>{creat.name}</a></div>
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                  <div>
                    <br></br>
                    <i>Autores da primeira história em quadrinho produzida.</i>
                  </div>
                </div>
              );
            })
          : ""}
      </AuthorGrid>
    </Fragment>
  );
};
