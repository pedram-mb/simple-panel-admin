import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const User = () => {
  const [user, setUser] = useState([]);
  const [userMain, setMainUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res);
        setUser(res.data);
        setMainUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandelDeleteUser = (userId) => {
    swal({
      title: "حذف ایتم",
      text: `ایا از حذف این کاربر${userId} اطمینان دارید!؟`,
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then((res) => {
            if (res.status === 200) {
              const newUser = user.filter((u) => u.id !== userId);
              setUser(newUser);
              swal("حذف با موفقیت انجام شد !", {
                icon: "success",
                buttons: "متوجه شدم",
              });
            } else {
              swal("عملیات با خطا مواجه شد !", {
                icon: "error",
                buttons: "متوجه شدم",
              });
            }
          });
      } else {
        swal("شما از حذف این کاربر منصرف شدید !");
      }
    });
  };

  const HandelSearch = (e) => {
    setUser(userMain.filter(u => u.name.includes(e.target.value)));
    // console.log(e.target.value);
  };

  return (
    <div className="user">
      <div className="user-header">
        <h3 className="text-center mt-5">مدیریت کاربران</h3>
      </div>
      <div className="user-main container">
        <div className="adduser-place mt-5">
          <abbr title="افزودن کاربر">
            <NavLink to="/adduser">
              <i className="bi bi-person-plus"></i>
            </NavLink>
          </abbr>
          <div className="search-bar">
            <i className="bi bi-search"></i>
            <input
              onChange={() => HandelSearch()}
              type="text"
              name=""
              value=""
              placeholder="جستوجو"
              className="p-2"
            />
          </div>
        </div>
        {user.length ? (
          <table className="table table-striped mt-2 user-table">
            <thead>
              <tr>
                <th>#</th>
                <th>نام</th>
                <th>نام کاربری</th>
                <th>ایمیل</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {user.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>
                    <div className="table-icons">
                      <NavLink to="/edituser">
                        <i className="bi bi-pencil-square"></i>
                      </NavLink>
                      <i
                        className="bi bi-x-square"
                        onClick={() => HandelDeleteUser(u.id)}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4 className="text-center text-primary p-2">لطفا صبر کنید ....</h4>
        )}
      </div>
    </div>
  );
};
export default User;
