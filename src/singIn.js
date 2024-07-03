import { useRef, useState } from "react";
import CustomInput from "./components/customInput";

export function Signin({ Submit }) {
  const [singIn, setSingIn] = useState({ email: "", password: "" });
  const inputs = useRef();

  const handleSubmitSingIn = (e) => {
    e.preventDefault();
    Submit(singIn);
    setSingIn({ email: "", password: "" });
    inputs.current.reset();
  };

  return (
    <>
      <h1>Sign In</h1>
      <div className="form">
        <form
          ref={inputs}
          onSubmit={(e) => handleSubmitSingIn(e)}
          onChange={(e) => {
            setSingIn({ ...singIn, [e.target.name]: e.target.value });
          }}
        >
          <CustomInput
            type="email"
            placeholder="Email"
            value={singIn.email}
            name="email"
            label="Email"
          />
          <CustomInput
            type="password"
            placeholder="Password"
            value={singIn.password}
            name="password"
            label="Password"
          />
          <CustomInput type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Signin;
