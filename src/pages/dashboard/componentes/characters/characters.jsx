import React, { Fragment, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import { useState } from "react";
import { publicKey,privateKey,baseURL } from "../../../../Auth/Auth";

import {
  Grid,
  ButtonPrev,
  ButtonNext,
  Numbers,
  Footer,
  Results,
} from "./style";
import theme from "../../../../theme/theme";
import { Link } from "react-router-dom";


export default function Characters() {
  const [character, setCharacter] = useState([]);
  const [load, setLoad] = useState(false);
  const [load2, setLoad2] = useState(false);
  const [load3, setLoad3] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [numero, setNumero] = useState(1);
  const [search,setSearch] = useState(true)

  const apiUrl = baseURL + "/v1/public/characters";

  const timestamp = new Date().getTime();

  const hash = md5(timestamp + privateKey + publicKey);

  async function requisicaoSearch() {
    if(!search){
      console.log('busca cancelada')
      return
    }
    let value = document.querySelector("#search").value;

    let params = {
      ts: timestamp,
      apikey: publicKey,
      hash: hash,
      modifiedSince: "8/22/2017",
      offset: (currentPage - 1) * 10,
      limit: 99,
    };
    await axios
      .get(apiUrl, { params })
      .then((response) => {
        const characters = response.data.data.results;

        let newValue = characters.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        console.log("buscar feita")
        setTotalResults(newValue.length);
        setLastPage(Math.ceil(newValue.length / 10));
        setCharacter(newValue.slice(0, 10));
        setSearch(false)
        setLoad3(true);
        document.querySelector(".enter").innerHTML = "Aperte Enter";
        return;
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error.message);
      });
  }
  async function requisicao() {
    if(!search){
      console.log('busca cancelada')
      return
    }
    let params = {
      ts: timestamp,
      apikey: publicKey,
      hash: hash,
      modifiedSince: "8/22/2017",
      offset: (currentPage - 1) * 10,
      limit: 10,
    };
    await axios
      .get(apiUrl, { params })
      .then((response) => {
        const characters = response.data.data.results;
        const totalCharacters = response.data.data.total;
        setTotalResults(totalCharacters);
      
        setCharacter(characters);

        setTotalPages(Math.ceil(totalCharacters / pageSize));

        if (document.querySelector("#search").value == "") {
          setLastPage(Math.ceil(totalCharacters / pageSize));
        }
        document.querySelector(".enter").innerHTML = "Aperte Enter";
        console.log("sem busca")
        setSearch(false)
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error.message);
      });
  }
  useEffect(() => {
    if(search == true){
      if (load == true) {
        requisicaoSearch();
      } else {
        requisicao();
      }
    }
   

    if (document.querySelector("#search")) {
      document.querySelector("#search").addEventListener("input", () => {
        document.querySelector(".enter").style.display = "block";
        if (document.querySelector("#search").value == "") {
          document.querySelector(".enter").innerHTML = "Aperte Enter";

          setTimeout(() => {
            document.querySelector(".enter").style.display="none"
          }, 5000);
        }
      });

      document.querySelector("#search").addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
          document.querySelector(".enter").innerHTML = "Carregando...";

          setNumero((state) => state + 2);

          document.querySelector("#search").blur();

          if (document.querySelector("#search").value == "") {
            setSearch(true)
            setLoad(false);
          } else {
            setSearch(true)
            setLoad(true);
          }
        }
      });
    }
  }, [currentPage, lastPage, load, load3, numero]);

  const handleNextPage = () => {
    setSearch(true)
    setCurrentPage(currentPage + 1);
   
  };

  const handlePrevPage = () => {
    setSearch(true)
    setCurrentPage(currentPage - 1);

  };

  const handlePageClick = (page) => {
    setSearch(true)
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
      {load2 ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Grid>
            {character.map((character) => (
              <Link
                to={"/character/" + character.id}
                className="itens"
                key={character.id}
              >
                <div className="div-img">
                  <div
                    id={"id" + character.id}
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
                      : "No description"}
                  </p>
                </aside>
              </Link>
            ))}
          </Grid>
          {totalResults > 9 ? (
            <Footer>
              <ButtonPrev onClick={handlePrevPage} disabled={currentPage === 1}>
                <img src={theme.icons.arrowLeft}></img>Anterior
              </ButtonPrev>
              {renderPageNumbers()}
              <ButtonNext
                onClick={handleNextPage}
                disabled={currentPage === lastPage}
              >
                Próxima<img src={theme.icons.arrowRight}></img>
              </ButtonNext>
            </Footer>
          ) : (
            ""
          )}
        </>
      )}
    </Fragment>
  );
}
