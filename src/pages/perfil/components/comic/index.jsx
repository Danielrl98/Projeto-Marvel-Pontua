import React, { Fragment } from "react";
import { ComicsGrid } from "./style";

export const ComicsIndex = (props) => {
  const character = props.character.map((e) => e.comics.items);
 
  return (
    <Fragment>
      <ComicsGrid>
        {character.length !== 0 ? (
          character[0].map((char) => {
            return (
              <div key={char.name}>
                <ul>
                  <li>&nbsp;&bull; <a target="__blank" href={(char.resourceURI).replace('http://gateway.marvel.com/v1/public/comics/','https://marvel.com/comics/issue/')   + '/' + (char.name).replaceAll(' ','_')}>{char.name}</a></li>
                </ul>
              </div>
            );
          })
        ) : (
          <li>No Found Comics</li>
        )}
      </ComicsGrid>
    </Fragment>
  );
}
