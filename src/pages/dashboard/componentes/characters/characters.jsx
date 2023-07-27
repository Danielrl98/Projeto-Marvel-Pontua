import React, { Fragment, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import { useState } from "react";
import { Grid,ButtonPrev,ButtonNext,Numbers,Footer } from "./style";
import theme from "../../../../theme/theme";

export default function Characters() {
  const [character, setCharacter] = useState([]);
  const [charactercopy, setCharacterCopy] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [firstPage, setFirstPage] = useState(1)
  const [lastPage, setLastPage] = useState(10)

  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;
  const baseURL = process.env.BASE_URL;

  const apiUrl = baseURL + "/v1/public/characters";

  const timestamp = new Date().getTime();

  const hash = md5(timestamp + privateKey + publicKey);

  const params = {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
    offset: (currentPage - 1) * pageSize,
    limit: pageSize,
  };

  async function requisicao() {
    await axios
      .get(apiUrl, { params })
      .then((response) => {
        const characters = response.data.data.results;
        const totalCharacters = response.data.data.total;

        setCharacter(characters);
        setCharacterCopy(characters);

        setTotalPages(Math.ceil(totalCharacters / pageSize));

        if (document.querySelector("#search")) {
          document.querySelector("#search").addEventListener("input", () => {
            let value = document.querySelector("#search").value;
           
            let newValue = characters.filter((item) =>
              item.name.toLowerCase().includes(value.toLowerCase())
            );

            setCharacter(newValue);
            console.log(newValue);

            if (value == "") {
              requisicao();
            }
          });
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error.message);
      });
  }
  useEffect(() => {
    if (load === false) {
      /*requisicao();*/
    }
  }, [currentPage, pageSize]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    
    setFirstPage(firstPage+1)
    setLastPage(lastPage+1)
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    if(firstPage !== 1){
      setFirstPage(firstPage-1)
    setLastPage(lastPage-1)
    }
    
    
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = firstPage; i <= lastPage; i++) {
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
    }

    return pageNumbers;
  };

  return (
    <Fragment>
      {load ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Grid>
            {character.map((character) => (
              <li key={character.id}>
                <div>
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url(${
                        character.thumbnail.path +
                        "." +
                        character.thumbnail.extension
                      })`,
                    }}
                  ></div>
                </div>
                <aside>
                  <h2>{character.name}</h2>
                  <p>
                    {character.description
                      ? character.description.substring(0, 170) + "..."
                      : "Sem descrição"}
                  </p>
                </aside>
              </li>
            ))}
          </Grid>
          <Footer>
            <ButtonPrev onClick={handlePrevPage} disabled={currentPage === 1}>
              <img src={ theme.icons.arrowLeft}></img>Anterior
            </ButtonPrev>
            {renderPageNumbers()}
            <ButtonNext 
              onClick={handleNextPage}
            >
              
              Próxima<img src={ theme.icons.arrowRight}></img>
            </ButtonNext>
          </Footer>
        </>
      )}
    </Fragment>
  );
}
