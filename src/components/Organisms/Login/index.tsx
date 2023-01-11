import React, { useState } from "react";
import * as C from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <input
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
      </C.Form>
      <C.Button type="submit">Login</C.Button>
    </C.Container>
  );
};

export default Login;
