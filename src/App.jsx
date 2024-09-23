import {createContext, useState} from 'react'
import KioskMain from "./components/kiosk/KioskMain.jsx";
import TodoIndex from "./components/todo/TodoIndex.jsx";
import CountIndex from "./components/counter/CountIndex.jsx";

export const LoginContext = createContext();

function App() {

  return (
    <LoginContext.Provider value={'BBB'}>
      <CountIndex></CountIndex>
      <KioskMain></KioskMain>
    </LoginContext.Provider>
  )
}

export default App
