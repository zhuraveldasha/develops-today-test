import "./App.css";
import {Input} from "./components/Input/Input";

function App() {
  return (
    <>
      <Input type="password" name="user_pass" clearable/>
      <br />
      <Input type="text" name="user_name"/>
      <br />
      <Input type="number" name="user_age" clearable value="36"/>
    </>
  );
}

export default App;
