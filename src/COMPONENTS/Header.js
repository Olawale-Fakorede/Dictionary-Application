
import React, { useContext, useState } from 'react'
import myImg from './imgs/icon-arrow.svg'
import { InputContext } from '../App';


const Header = () => {

  const [value, setValue] = useState("");
  const { inputValue, setInputValue} = useContext(InputContext);

    const handleInputChange = e => setValue(e.target.value);

    const handleClick = () => {

      setInputValue(value);
      setValue("");
    }; 

    const HandleInputKeyDown = (e) => {
      if (e.key === "Enter") {
        setInputValue(value);
        setValue("");
      }
    };
  return (
    <div className='bg-gray-700'>
        <div className='container mx-auto py-8'>
          <h1 className='text-3xl font-bold text-center text-white'>Dictionary</h1>
          <p className='text-center mt-1 mb-10 text-slate-300 text-lg'>Check out the meaning of Words</p>

          <div className='flex items-center justify-center mt-5'>
              <div className='flex border-2 border-gray-200 rounded'>

                <input
                  type="text"
                  placeholder="Search here.."
                  className=' rounded rounded-r-none w-96 h-9 outline-white py-2 pl-2 ml-0 text-xs font-san font-bold md:w-80'
                  onChange={handleInputChange}
                  value={value}
                  onKeyDown={HandleInputKeyDown}
                />

                <span className='w-10 h-9 bg-black rounded-r-sm'   onClick={handleClick}>
                  <img src={myImg} className='w-4 h-4 relative top-2 left-3' alt="arrow" />
                </span>

              </div>
          </div>

          { inputValue && (
            <h3 className='text-gray-50 text-center mt-4 '>Showing result for : 
            <span className='text-white font-bold'> {inputValue}</span>
            </h3>
          )}
        </div>
    </div>
  )
}

export default Header