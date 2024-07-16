
import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { InputContext } from '../App';
import Definitions from './Definitions';
import Examples from './Examples';
import Synonyms from './Synonyms';
import Antonym from './Antonym';
import Phonetics from './Phonetics';


axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";
// Axios.get("https://api.dictionaryapi.dev/api/v2/entries/en")
//         .then((response) => {console.log(response);});

const Display = () => {
    const { inputValue } = useContext(InputContext);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(`/${param}`)
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally{
          setLoading(false);
        }
    }

    useEffect(() => {
      if (inputValue.length) {
        fetchData(inputValue);
      }
    }, [inputValue]);
    
    if (loading) {
      return (
        <div className='flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl justify-center items-center h-screen'>
          <div className='spinner-border text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )
    }

    if (error) {
      return <h3 className='text-center mt-10 font-semibold text-gray-500'>
                No Definitions for Word
              </h3>
    }

  return (
    <div className='container mx-auto p-4 max-w2xl bg-yellow-100 rounded-2xl justify-center'>
        {
          response && (
            <div>
              <h3 className='text-2xl font-bold mt-4'>Meaning & Definitions : </h3>
              <Definitions mean={response} />
              <h3 className='text-2xl font-bold mt-4'>Phonetics : </h3>
              <Phonetics mean={response} />
              <h3 className='text-2xl font-bold mt-4'>Example : </h3>
              <Examples mean={response} />
              <h3 className='text-2xl font-bold mt-4'>Synonyms : </h3>
              <Synonyms mean={response} />
              <h3 className='text-2xl font-bold mt-4'>Antonyms : </h3>
              <Antonym mean={response} />
            </div>
          )
        }
    </div>
  )
}

export default Display