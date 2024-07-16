
import React from 'react'

const Phonetics = ({ mean }) => {
  return (
    <div>
        {mean.map((data => data.phonetics.map(words => (
            <div>
                <p>{words.phonetics}</p>
                <p>{words.text}</p>
            </div>
        ))))}
    </div>
  )
}

export default Phonetics