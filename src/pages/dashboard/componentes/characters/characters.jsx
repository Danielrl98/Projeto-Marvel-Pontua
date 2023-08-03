import React, { Fragment, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import { useState } from "react";
import { publicKey, privateKey, baseURL } from "../../../../Auth/Auth";
import { CharacterHTML } from "./characterHTML";
import { Numbers } from "./style";
import fakeData from "./fakeData.json";

export default function Characters() {
  const [load, setLoad] = useState(true);
  const [character, setCharacter] = useState(fakeData);
  const [characterGlobal, setCharacterGlobal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState(false);

  const apiUrl = baseURL + "/v1/public/characters";
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + privateKey + publicKey);

  let params = {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
    modifiedSince: "8/22/2017",
    limit: 99,
  };

  async function requisicao() {
    await axios
      .get(apiUrl, { params })
      .then((response) => {
        const characters = response.data.data.results;

        setLastPage(Math.ceil(characters.length / 10));

        setCharacterGlobal(characters);

        setCharacter(
          characters.slice(
            (currentPage - 1) * 10,
            ((characters.length * 10) / characters.length) * currentPage
          )
        );

        setLoad(false);
        return;
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error.message);
      });
  }
  function CharactersFunction() {
    let newValue = characterGlobal.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setLastPage(Math.ceil(newValue.length / 10));

    setCharacter(
      newValue.slice(
        (currentPage - 1) * 10,
        ((newValue.length * 10) / newValue.length) * currentPage
      )
    );

    console.log(currentPage);
  }

  function verifyEnter() {
    if (document.querySelector("#search")) {
      document.querySelector("#search").addEventListener("input", () => {
        handlePageClick(1);
        setNumbers(false);
        setValue(document.querySelector("#search").value);
      });
    }
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const showButton = () => {
    setNumbers(true);
  };
  const renderPageNumbers = () => {
    let pageNumbers = [];
    let points = 1;

    const pushNumbers = (i) => {
      pageNumbers.push(
        <Numbers
          key={i}
          style={{
            cursor: "pointer",
            textDecoration: currentPage === i ? "underline" : "none",
          }}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Numbers>
      );
    };
    if (numbers == true) {
      for (let i = 1; i <= lastPage; i++) {
        pushNumbers(i);
      }
    } else {
      for (let i = 1; i <= lastPage; i++) {
        if (i !== 4 && i !== 5 && i !== 6 && i !== 7) {
          pushNumbers(i);
        } else {
          if (points == 1) {
            points = 2;
            pageNumbers.push(
              <Numbers
                key={i}
                style={{
                  cursor: "pointer",
                  textDecoration: currentPage === i ? "underline" : "none",
                }}
                onClick={showButton}
              >
                ...
              </Numbers>
            );
          }
        }
      }
    }

    return pageNumbers;
  };

  useEffect(() => {
    verifyEnter();

    if (load) {
      requisicao();
    } else {
      CharactersFunction();
    }
    if(currentPage == 3 || currentPage == 8){
      showButton(true)
    }
  }, [load, currentPage, lastPage, value, numbers]);

  return (
    <Fragment>
      <CharacterHTML
        value={{
          character,
          handlePrevPage,
          currentPage,
          handleNextPage,
          lastPage,
          handlePageClick,
          renderPageNumbers,
          load
        }}
      />
    </Fragment>
  );
}
