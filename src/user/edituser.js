import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const EditUser = ()=>{

    const HandelSavechanges = ()=>{
        swal("Good job!", "You clicked the button!", "success");
    }

    const navigate = useNavigate();

    return(
        <div className="edituser container">
            <div>
                <h3 className="mt-5 text-center">ویرایش کاربر</h3>
            </div>
            <div className="edit-main p-4 mt-4 card input-group">
                <div className="edit-header">
                    <label>نام</label>
                    <input className="p-2 form-control" type="text" name="" />
                    <label>نام خانوادگی</label>
                    <input className="p-2 form-control" type="text" name="" />
                    <label>نام</label>
                    <input className="p-2 form-control" type="text" name="" />
                    <label>ایمیل</label>
                    <input className="p-2 form-control" type="text" name="" />
                </div>
                <div className="edit-content mt-3 row">
                    <label>ادرس</label>
                    <input className="p-2 form-control col" type="text" name="" placeholder="شهر"/>
                    <input className="p-2 form-control col" type="text" name="" placeholder="کشور"/>
                    <input className="p-2 form-control col" type="text" name="" placeholder="شماره تلفن"/>
                    <input className="p-2 form-control col" type="text" name="" placeholder="شبکه اجنماعی"/>
                </div>
                <div className="adduser-footer mt-4">
                    <button onClick={HandelSavechanges} className="btn btn-primary">ذخیره</button>
                    <button onClick={()=>{navigate(-1)}} className="btn btn-danger">بازگشت</button>
                </div>
            </div>
        </div>
    )
}
export default EditUser;