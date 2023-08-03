import React, { Fragment, useEffect } from "react";
import { EventsGrid } from "./style";

export default function Events(props){
    const character = props.character.map((e) => e.events.items);

  useEffect(() => {
    console.log(props.character);
  }, []);

   
    return(
        <Fragment>
            <EventsGrid>
            {character.length !== 0 ? (
          character[0].map((char) => {
            return (
              <div key={char.name}>
                <ul>
                  <li>&nbsp;&bull; <a target="__blank" href={(char.resourceURI).replace('gateway.marvel.com/v1/public/events/','marvel.com/comics/events/')   + '/' + (char.name).replaceAll(' ','_')}>{char.name}</a></li>
                </ul>
              </div>
            );
          })
        ) : (
          <li>No Found events</li>
        )}
            </EventsGrid>
        </Fragment>
    )
}