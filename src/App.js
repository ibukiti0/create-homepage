import { Title } from "./components/Title/Title";

import classes from "./App.module.scss";
import {Myintro} from "./components/my_intro/myintro";
import { Pekocount } from "./components/peko_count/peko_count";

function App() {
  return (
    <div className={classes.app_backgaround}>
      <Title/>
      <Myintro/>
      <Pekocount/>
    </div>
  );
}

export default App;
