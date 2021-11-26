import classes from "./Title.module.scss";
export const Title =()=>{
    return(
        <div className={classes.container}>
        <h1 className={classes.title}>ibukiti blog</h1>
        <p className={classes.title_introduce}>やる気の無い大学3回生</p>
        </div>
    );
};