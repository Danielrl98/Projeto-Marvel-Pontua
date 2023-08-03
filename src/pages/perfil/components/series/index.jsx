import React, { Fragment, useEffect } from "react";
import { SeriesGrid } from "./style";

export default function Series(props) {
  const character = props.character.map((e) => e.series.items);

  useEffect(() => {
    console.log(character);
  }, []);

  return (
    <Fragment>
      <SeriesGrid>
      {character ? (
          character[0].map((char) => {
            return (
              <div key={char.name}>
                <ul>
                  <li>&nbsp;&bull; <a target="__blank" href={(char.resourceURI).replace('gateway.marvel.com/v1/public/series/','marvel.com/comics/series/')   + '/' + (char.name).replaceAll(' ','_')}>{char.name}</a></li>
                </ul>
              </div>
            );
          })
        ) : (
          <li>No Found Series</li>
        )}
      </SeriesGrid>
    </Fragment>
  );
}
