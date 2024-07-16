
import React from 'react'

const Examples = ({ mean }) => {
  return (
    <div>
        {mean.map((data => data.meanings.map(words => words.definitions.map(def => (
            <div>
                <p>{def.example}</p>
            </div>
        )))))}
    </div>
  )
}

export default Examples