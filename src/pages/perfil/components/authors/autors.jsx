import React, { Fragment, useEffect, useState } from "react";
import { AuthorGrid } from "./style";
import axios from "axios";
import md5 from "md5";

export default function Authors(props){

    const [id,setId] = useState(props.id)
    const [character,setCharacter] = useState([])

    const [load,setLoad] = useState(true)

    const publicKey = process.env.PUBLIC_KEY;
    const privateKey = process.env.PRIVATE_KEY;
    const baseURL = process.env.BASE_URL;

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
           
            setCharacter([characters[7]])
            console.log(characters)
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
                    ) }): 'No found Author' }
                
            </AuthorGrid>
        </Fragment>
    )
}