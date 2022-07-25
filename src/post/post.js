import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
const Post = () => {

    const [post , setPost] = useState([]);

    const [postMain, setMainPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res);
        setPost(res.data);
        setMainPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandelDeletePost = (postId) => {
    swal({
      title: "حذف ایتم",
      text: `ایا از حذف این پست${postId} اطمینان دارید!؟`,
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://jsonplaceholder.typicode.com/users/${postId}`)
          .then((res) => {
            if (res.status === 200) {
              const newPost = post.filter((u) => u.id !== postId);
              setPost(newPost);
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
    setPost(postMain.filter(u => u.name.includes(e.target.value)));
    // console.log(e.target.value);
  };

  return (
    <div className="user">
      <div className="user-header">
        <h3 className="text-center mt-5">مدیریت پست ها</h3>
      </div>
      <div className="user-main container-lg">
        <div className="adduser-place mt-5">
          <abbr title="افزودن پست">
            <NavLink to="/adduser">
            <i className="bi bi-patch-plus"></i>
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
        {post.length ? (
          <table className="table table-striped mt-2 user-table">
            <thead>
              <tr>
                <th>نویسنده</th>
                <th>تیتر</th>
                <th>متن</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {post.map((u) => (
                <tr key={u.id}>
                  <td>{u.userId}</td>
                  <td>{u.title}</td>
                  <td>{u.body}</td>
                  <td>
                    <div className="table-icons-post">
                      <NavLink to="/edituser">
                        <i className="bi bi-pencil-square"></i>
                      </NavLink>
                      <i
                        className="bi bi-x-square"
                        onClick={() => HandelDeletePost(u.id)}
                      ></i>
                      <NavLink to="/comment">
                        <i className="bi bi-cc-square"></i>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4 className="text-center text-danger p-2">لطفا صبر کنید ....</h4>
        )}
      </div>
    </div>
  );
};
export default Post;
