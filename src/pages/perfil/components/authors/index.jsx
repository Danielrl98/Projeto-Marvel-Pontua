import React, { Fragment, useEffect, useState } from "react";
import { AuthorGrid } from "./style";
import axios from "axios";
import md5 from "md5";
import { publicKey,privateKey,baseURL } from "../../../../Auth/Auth";

export const Authors = (props) => {

    const [id,setId] = useState(props.id)
    const [character,setCharacter] = useState([])
    const [load,setLoad] = useState(false)


    const apiUrl = baseURL + `/v1/public/characters/${id}/comics`;

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
           

            setCharacter([characters[0]])
            setLoad(true)
            console.log(character)
          })
      }
      useEffect( () => {
        
        requisicao()
       
      },[])

    return(
        <Fragment>
            <AuthorGrid>
            { load ? character.map(( author) => { return (
                         <ul key={author.id}>
                            <li>{author.creators.items.map(creat => { return (
                                <div key={creat.name}>
                                    <div>&nbsp;&bull;  {creat.name}</div>
                                </div>
                            )})}</li>
                         </ul>
                    ) }): '' }
                
            </AuthorGrid>
        </Fragment>
    )
}