import classes from "./Title.module.scss";
export const Title =()=>{
    return(
        <div className={classes.container}>
        <h1 className={classes.title}>ibukiti blog</h1>
        <pre className={classes.title_introduce}>
        私は現在大学3回生です。
        自主的にプログラミングの勉強しています。
        </pre>
        </div>
    );
};