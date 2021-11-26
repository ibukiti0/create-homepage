import { Title } from "./components/Title/Title";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.app_backgaround}>
      <div className={classes.app_container}>
      <Title/>
      </div>
    </div>
  );
}

export default App;
