import {  useState } from "react";
import CustomInput from "./components/customInput";

export function SignUp({ Submit }) {
  const [newUser, setNewUser] = useState({
    name: "",
    nickname: "",
    email: "",
    sex: "",
    password: "",
    checkPassword: "",
  });

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.checkPassword) {
      alert("Пароли не совпадают");
      return;
    } else {
      Submit(newUser);
      setNewUser({
        name: "",
        nickname: "",
        email: "",
        sex: "",
        password: "",
        checkPassword: "",
      });
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <div className="form">


      <form
        onSubmit={(e) => handleSubmitSignUp(e)}
        onChange={(e) =>
          setNewUser({ ...newUser, [e.target.name]: e.target.value })
        }
      >
        <CustomInput
          type="text"
          placeholder="Имя"
          value={newUser.name}
          name="name"
          label="Имя"
        />
        <CustomInput
          type="text"
          placeholder="Никнейм"
          value={newUser.nickname}
          name="nickname"
          label="Никнейм"
        />
        <CustomInput
          type="email"
          placeholder="Email"
          value={newUser.email}
          name="email"
          label="Email"
        />
        <CustomInput
          type="radio"
          placeholder="Пол"
          value={newUser.sex}
          name="sex"
          label="Пол"
        />
        <CustomInput
          type="password"
          placeholder="Пароль"
          value={newUser.password}
          name="password"
          label="Пароль"
        />
        <CustomInput
          type="password"
          placeholder="Повторите пароль"
          value={newUser.checkPassword}
          name="password"
          label="Повторите пароль"
        />
        <CustomInput type="submit" name="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
}
export default SignUp;
