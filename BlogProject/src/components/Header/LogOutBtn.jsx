import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogOutBtn() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <>
      <button className="inline-bloc px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
        Logout
      </button>
      
    </>
  )
}

export default LogOutBtn;
