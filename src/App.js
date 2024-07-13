
import { createContext, useState } from 'react';
import './App.css';
import Header from './COMPONENTS/Header';
import Display from './COMPONENTS/Display';


export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState(" ");
  console.log(inputValue);

  const value = {
    inputValue, setInputValue
  }
  return (
    <InputContext.Provider value={value}>
    <div>

      <Header/>
      <Display/>
    </div>
    </InputContext.Provider>
  );
}

export default App;
