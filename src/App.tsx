import "./App.css";
import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";
import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";
import { useState } from "react";
import { MenuItem } from "./components/SidebarMenu/MenuItem";

function App() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  return (
    <>
      <Input type="password" name="user_pass" clearable />
      <Toast
        type="success"
        text="hello"
        closeButton
        transition
        duration={3000}
      />

      <br />

      <button onClick={() => setShowSidebarMenu(true)}>Open SideBar</button>

      <SidebarMenu isOpen={showSidebarMenu} toggleOpen={setShowSidebarMenu}>
        <MenuItem lable="Shop" />
        <MenuItem lable="Pages">
          <MenuItem lable="Page 1" />
          <MenuItem lable="Page 2" />
        </MenuItem>
      </SidebarMenu>
    </>
  );
}

export default App;
