
import React from 'react'

const Antonym = ({ mean }) => {

  return (
    <div>
        {mean.map((data => data.meanings.map(words => words.definitions.map(def => {
            return def.antonyms?.map(ant => (
                <li>{ant}</li>
            ))
        }))))}
    </div>
  );
};

export default Antonym;