
import React, { useState } from 'react'


// axios.default.baseUrl = "'https://ap";

const Display = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(" ");
    // const [loading, setLoading] = useState(flase);

    // const fetchData = async () => {
    //     try {
    //         setLoading(true);
    //         const res = await axios('/${param}')
    //     } catch (error) {
            
    //     }
    // }

  return (
    <div className='container mx-auto p-4 max-w2xl bg-yellow-100 rounded-2xl justify-center'>
        <h3 className='text-2xl font-bold mt-4'>Meaning & Definitions : </h3>
        <h3 className='text-2xl font-bold mt-4'>Example : </h3>
        <h3 className='text-2xl font-bold mt-4'>Synonyms : </h3>
        <h3 className='text-2xl font-bold mt-4'>Antonyms : </h3>
    </div>
  )
}

export default Display