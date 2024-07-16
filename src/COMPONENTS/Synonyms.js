
import React from 'react'

const Synonyms = ({ mean }) => {

  return (
    <div>
        {mean.map((data => data.meanings.map(words => words.definitions.map(def => {
            return def.synonyms?.map(syn => (
                <li>{syn}</li>
            ))
        }))))}
    </div>
  );
};

export default Synonyms;