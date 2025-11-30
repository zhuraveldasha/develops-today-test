import "./App.css";
import {Input} from "./components/Input/Input";
import {Toast} from "./components/Toast/Toast";

function App() {
  return (
    <>
      <Input type="password" name="user_pass" clearable/>
      <Toast type="success" text="hello" closeButton transition duration={3000}/>
    </>
  );
}

export default App;
