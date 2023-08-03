import React, { Fragment, useEffect, useState } from "react";
import { Card } from "./style";

export default function VisaoGeral(props) {
  const [load, setLoad] = useState(false);

  const { character } = props;

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <Fragment>
      <Card>
        {load
          ? character.map((char) => {
              return (
                <div className="flex" key={char.id}>
                  <div>
                    <div  id={'id'+character.id}
                    className="img"
                    style={{
                      backgroundImage: `url(${
                        char.thumbnail.path +
                        "." +
                        char.thumbnail.extension
                      })`,
                    }}
                  ></div></div>
                  <div className="description">
                    <h2>{char.name}</h2>
                    <p>{char.description
                      ? char.description
                      : "Sem descrição"}
                    </p>
                    </div>
                </div>
              );
            })
          : "Sem dados"}
      </Card>
      
    </Fragment>
  );
}
