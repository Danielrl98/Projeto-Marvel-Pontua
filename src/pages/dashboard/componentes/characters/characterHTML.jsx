import React, { Fragment, useEffect, useState } from "react";
import { Grid, ButtonPrev, ButtonNext, Footer } from "./style";
import theme from "../../../../theme/theme";
import { Link } from "react-router-dom";

export function CharacterHTML(props) {
  const character = props.value.character;
  const handlePrevPage = props.value.handlePrevPage;
  const currentPage = props.value.currentPage;
  const handleNextPage = props.value.handleNextPage;
  const lastPage = props.value.lastPage;
  const renderPageNumbers = props.value.renderPageNumbers;
  const load = props.value.load;

  return (
    <Fragment>
      {character.length !== 0 ? (
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
                      ? character.description.substring(0, 170)
                      : "Sem descrição"}
                  </p>
                </aside>
              </Link>
            ))}
          </Grid>
          <Footer>
            {!load ? (
              <>
                {currentPage !== 1 ? (
                  <ButtonPrev>
                    <div onClick={handlePrevPage} disabled={currentPage === 1}>
                      <img src={theme.icons.arrowLeft}></img><span>Anterior</span>
                    </div>
                  </ButtonPrev>
                ) : (
                  <ButtonPrev>
                    <div
                      className="disabled"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      <img src={theme.icons.arrowLeft}></img><span>Anterior</span>
                    </div>
                  </ButtonPrev>
                )}
                {renderPageNumbers()}
                {currentPage === lastPage ? (
                  <ButtonNext>
                    <div
                      onClick={handleNextPage}
                      disabled={currentPage === lastPage}
                      className="disabled"
                    >
                      <span>Próxima</span><img src={theme.icons.arrowRight}></img>
                    </div>
                  </ButtonNext>
                ) : (
                  <>
                    <ButtonNext>
                      <div
                        onClick={handleNextPage}
                        disabled={currentPage === lastPage}
                      >
                        <span>Próxima</span><img src={theme.icons.arrowRight}></img>
                      </div>
                    </ButtonNext>
                  </>
                )}
              </>
            ) : (
              ""
            )}
          </Footer>
        </>
      ) : (
        <Grid>
          <p>No Found Agent</p>
        </Grid>
      )}
    </Fragment>
  );
}
