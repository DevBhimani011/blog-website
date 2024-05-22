import React, { useState } from "react";

function Login() {
  var pass = "";
  var cpass = "";
  const [action, setAction] = useState("signUp");
  const [conform, setConform] = useState("");
  function handleLogin() {
    setAction("signIn");
  }

  function handleSignUp() {
    setAction("signUp");
    pass === cpass ? setConform("") : setConform("Please enter same password");
    console.log("called");
  }
  function handlePassword(event) {
    pass = event.target.value;
  }
  function handleConPassword(event) {
    cpass = event.target.value;
  }

  return (
    <div className="container">
      <h1>{action}</h1>

      <input
        className="container"
        name="email"
        placeholder="Enter Email"
      ></input>

      <input
        className="container"
        name="password"
        placeholder="Enter Password"
        onChange={handlePassword}
      ></input>

      {action === "signIn" ? (
        <div> </div>
      ) : (
        <input
          className="container"
          name="conform_password"
          placeholder="Conform Password"
          onChange={handleConPassword}
        ></input>
      )}

      <span>{conform}</span>

      <button onClick={handleLogin}>Sign In</button>

      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default Login;
