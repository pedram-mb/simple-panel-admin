import React, { useState } from "react";
import Main from "./container";
import Sidebar from "./sidebar";
import {BrowserRouter} from "react-router-dom";
import './style/app.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { showContext } from "./context/context";


const App=()=>{

  const [showMenu , setshowMenu] =useState(false)

  return(
    <BrowserRouter>
      <div>
        <showContext.Provider 
        value={{
          showMenu,
          setshowMenu,
        }}
        >
          <Main />
          <Sidebar />
        </showContext.Provider>
      </div>
    </BrowserRouter>
  )
}
export default App;