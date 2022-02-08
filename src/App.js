import { Title } from "./components/Title/Title";
import countapi from 'countapi-js';
import classes from "./App.module.scss";
import {Myintro} from "./components/my_intro/myintro";
import Image  from "./Screenshot_2022-02-04-23-58-58-137_jp.naver.line.android.jpg";
import  {ham_menu}  from "./components/menu_bar/menu" ;


function App() {
  countapi.visits().then((result) => {
    console.log(result.value);
});
  return (
    
    <div className={classes.app_backgaround}>
      <ham_menu/>
      <img src={Image} className={classes.icon}/>
      <Title/>
      <Myintro/>
    </div>
  );
}

export default App;
