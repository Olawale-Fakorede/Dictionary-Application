
import React from 'react'

const Definitions = ({ mean }) => {
    console.log(mean);
  return (
    <div>
        {mean.map((data => data.meanings.map(words => words.definitions.map(def => (
            <div>
                <li>{def.definition}</li>
                <hr />
            </div>
        )))))}
    </div>
  )
}

export default Definitions