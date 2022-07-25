// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// const Gallery=()=>{

//     const [gallery , setGallery] = useState([]);

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/albums").then((res)=>{
//             console.log(res);
//             setGallery(res.data)
//         })
//         .catch((err) =>{
//             console.log(err);
//         })
//     } , [])

//     return(
//         <div className="gallery">
//             <div>
//                 <h3 className="text-center mt-5">گالری</h3>
//             </div>
//             <div className="container gallery-container">
//                 {
//                     gallery.length ? (
//                         <div className="">
//                             {
//                                 gallery.map((g)=>(
//                                     <div className="card" key={g.id}>
                                        
//                                         <h2>
//                                             {g.userid}
//                                         </h2>
//                                         <p>
//                                             {g.title}
//                                         </p>
//                                         <NavLink to="/image">
//                                             <button className="btn btn-info">show image</button>
//                                         </NavLink>
                                        
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     ) : (
//                         <h4 className="text-center text-info p-2">لطفا صبر کنید ....</h4>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }
// export default Gallery;