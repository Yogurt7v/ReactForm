import "./App.css";
import '@mantine/core/styles.css';
import  Signin  from "./singIn";
import  Signup  from "./singUp";

function App() {

  const Submit = (params) => {
    console.log("Отправка формы", params);
  };


  return (
    <div className="App">
      <Signin Submit={Submit}/>
      <Signup Submit={Submit}/>
    </div>
  );
}

export default App;
