import React, { useState, useContext } from "react";
import userContext from "../contexts/userContext";
function Login() {
    const [username, setUserName]= useState()
    const [passsword, setPassword]= useState()
    const handleSubmit =()=>{}
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="username"
      value={username}
      onChange={(e)=>setUserName(e.target.handleSubmit)} />
      <input type="text" placeholder="passsword"
      value={passsword}
      onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
