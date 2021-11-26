import { Title } from "./components/Title/Title";

import classes from "./App.module.scss";
import {Myintro} from "./components/my_intro/myintro";

function App() {
  return (
    <div className={classes.app_backgaround}>
      <Title/>
      <Myintro/>
    </div>
  );
}

export default App;
