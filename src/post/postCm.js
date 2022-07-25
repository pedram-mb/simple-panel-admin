import axios from "axios";
import React, { useEffect, useState } from "react";

const PostCm = ()=>{

    const [comment , setComment] = useState([]);


    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/comments").then((res) =>{
            console.log(res.data);
        })
    }, []);

    return(
        <div>

        </div>
    )
}
export default PostCm;