import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "./gallery/gallery";
import Post from "./post/post";
import Todos from "./todos/todos";
import User from "./user/users";
import "bootstrap/dist/css/bootstrap.rtl.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { showContext } from "./context/context";
import Adduser from "./user/addUser";
import EditUser from "./user/edituser";
import Image from "./gallery/image";
import PostCm from "./post/postCm";

const Main =()=>{

  const {showMenu , setshowMenu} = useContext(showContext);

  const HandelSetMenu = (event)=>{
    event.stopPropagation();
    setshowMenu(!showMenu);
    console.log(showMenu);
  }

  return(
    <div className="main" onClick={()=>{setshowMenu(false)}}>
      <div className="main-header mt-4 container">
        <i className="bi bi-list" onClick={HandelSetMenu}></i>
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<User />}/>
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/edituser" element={<EditUser />}/>
          <Route path="/todo" element={<Todos />}/>
          <Route path="/post" element={<Post />} />
          <Route path="/comment" element={<PostCm />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/image" element={<Image />}/>
        </Routes>
      </div>
    </div>
  )
}
export default Main;