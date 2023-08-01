import { useEffect, useState } from "react";
import { Select } from "../style";
import React, { Fragment } from "react";
import UtilsHero from "../utils";
import { publicKey,privateKey,baseURL } from "../../../Auth/Auth";
import axios from "axios";
import md5 from "md5";

export default function FakeSelect() {

    const [options,setOptions] = useState([])

    const apiUrl = baseURL + "/v1/public/characters";

    const timestamp = new Date().getTime();
  
    const hash = md5(timestamp + privateKey + publicKey);

    async function requisicao() {
        let params = {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          modifiedSince: "8/22/2017"
        };
        await axios
          .get(apiUrl, { params })
          .then((response) => {
            const characters = response.data.data.results;
            const totalCharacters = response.data.data.total;
            console.log(characters)
            setOptions(characters);
       
          })
          .catch((error) => {
            console.error("Ocorreu um erro:", error.message);
          });
      }

 
useEffect( () => {
    requisicao()
},[])

  const [isOpen, setIsOpen] = useState(false);
  const [selected,setSelected] = useState(false)
  const [selectedName, setselectedName] = useState('Selecione um herói');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedId, setSelectedId] = useState('');

  const handleOptionClick = (option, img,id) => {
    setselectedName(option);
    setSelectedImage(img);
    setSelectedId(id)
    setSelected(true)
    setIsOpen(false);
  };

  return (
    <Fragment>
    <UtilsHero >
      <Select className="fake-select" value={{selected,setSelected,setselectedName,setSelectedImage}}>
        <input type="hidden" id="name" onChange={e => e.target.value } value={selectedName }/>
        <input type="hidden" id="id" onChange={e => e.target.value } value={selectedId }/>
        <input type="hidden" id="image" onChange={e => e.target.value } value={selectedImage || ''}/>

        <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
          {selectedName ? (
            <div className="principal">
              <div
                className="img"
                style={{ backgroundImage: `url(${selectedImage})` }}
              ></div>
              {selectedName}
            </div>
          ) : (
            "Selecione um herói"
          )}
        </div>
        {isOpen && (
        <div className="div-options">
          <div className="options">
            {options.map((option) => (
              <div key={option.id} className="options-img">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${
                        option.thumbnail.path +
                      "." +
                      option.thumbnail.extension
                    })`,
                  }}
                ></div>
                <div
                  className="option"
                  onClick={() => handleOptionClick(option.name, option.thumbnail.path +
                    "." +
                    option.thumbnail.extension,option.id)}
                >
                  <div>{option.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </Select>
      </UtilsHero>
    </Fragment>
  );
}
