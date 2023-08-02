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
          <li>No Found events</li>
        )}
            </EventsGrid>
        </Fragment>
    )
}