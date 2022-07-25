// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Image = () => {
//   const [showImage, setShowImage] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => {
//         console.log(res);
//         setShowImage(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       <div>
//         <h3 className="text-center">عکس ها</h3>
//       </div>
//       <div className="container image-show-box">
//         {showImage.length ? (
//           <div className="image-box">
//             {showImage.map((i) => (
//               <div key={i.id} className="card">
//                 <div>{i.url}</div>
//                 <h3>{i.albumId}</h3>
//                 <p>{i.title}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <h4 className="text-center text-warning p-2">لطفا صبر کنید ....</h4>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Image;
