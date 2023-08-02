import React, { Fragment, useEffect, useState } from "react";
import { ComicsGrid } from "./style";

export default function ComicsIndex(props) {
  const character = props.character.map((e) => e.comics.items);

  useEffect(() => {
    console.log(character);
  }, []);

  return (
    <Fragment>
      <ComicsGrid>
        {character ? (
          character[0].map((char) => {
            return (
              <div key={char.name}>
                <ul>
                  <li>&nbsp;&bull; {char.name}</li>
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
