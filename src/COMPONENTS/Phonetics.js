
import React from 'react'

const Phonetics = ({ mean }) => {
  return (
    <div>
        {mean.map((data => data.phonetics.map(words => (
            <div>
                <p>{words.phonetics}</p>
                <p>{words.text}</p>
                <span>
                    <audio src={words.audio} alt='audio' controls />
                    Click to listen to the audio
                </span>
            </div>
        ))))}
    </div>
  )
}

export default Phonetics