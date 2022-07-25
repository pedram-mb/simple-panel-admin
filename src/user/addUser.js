import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Adduser = ()=>{

    const HandelSaveUser = ()=>{
       
        swal("Good job!", "You clicked the button!", "success");
    }

    const navigate = useNavigate();

    const [creatUser , setcreatUser] = useState({
        name : "",
        username : "",
        email : "",
        address : {
            street : "",
            city : "",
            suite : "",
            zipcode : "",
        }
    })

    const submitDeta = (e)=>{
        e.preventDefault();
        // console.log(creatUser);
        axios.post('https://jsonplaceholder.typicode.com/users' , creatUser).then(res =>{
            console.log(res);
        })
    }

    return(
        <div className="adduser container">
            <div>
                <h3 className="mt-5 text-center">افزودن کاربر</h3>
            </div>
            <form onSubmit={submitDeta} className="adduser-main p-4 mt-4 card input-group">
                <div className="adduser-header">
                    <label>نام</label>
                    <input className="p-2 form-control" type="text" name="" value={creatUser.name} onChange={(e)=>setcreatUser({
                        ...creatUser , name : e.target.value
                    })}/>
                    <label>نام کاربری</label>
                    <input className="p-2 form-control" type="text" name="" value={creatUser.username} onChange={(e)=>setcreatUser({
                        ...creatUser , username : e.target.value
                    })}/>
                    <label>ایمیل</label>
                    <input className="p-2 form-control" type="text" name="" value={creatUser.email} onChange={(e)=>setcreatUser({
                        ...creatUser , email : e.target.value
                    })}/>
                </div>
                <div className="adduser-content mt-3 row">
                    <label>ادرس</label>
                    <input className="p-2 form-control col" type="text" name="" value={creatUser.address.city} onChange={(e)=>setcreatUser({
                        ...creatUser , address : {...creatUser.address , city : e.target.value}
                    })} placeholder="شهر"/>
                    <input className="p-2 form-control col" type="text" name="" value={creatUser.address.street} onChange={(e)=>setcreatUser({
                        ...creatUser , address : {...creatUser.address , street : e.target.value}
                    })} placeholder="خیابان"/>
                    <input className="p-2 form-control col" type="text" name="" value={creatUser.address.suite} onChange={(e)=>setcreatUser({
                        ...creatUser , address : {...creatUser.address , suite : e.target.value}
                    })} placeholder="ادامه ادرس"/>
                    <input className="p-2 form-control col" type="text" name="" value={creatUser.address.zipcode} onChange={(e)=>setcreatUser({
                        ...creatUser , address : {...creatUser.address , zipcode : e.target.value}
                    })} placeholder="کد پستی"/>
                </div>
                <div className="adduser-footer mt-4">
                    <button onClick={HandelSaveUser} type="submit" className="btn btn-primary">افزودن</button>
                    <button onClick={()=>{navigate(-1)}} className="btn btn-danger">بازگشت</button>
                </div>
            </form>
        </div>
    )
}
export default Adduser;