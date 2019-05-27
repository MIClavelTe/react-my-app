import React from "react";
import styles from './HelloWorld.module.css'; // Import css modules stylesheet as styles

// function HelloWorld(props) {
//     return <h1>Hello, {props.asdf}</h1>;
// }

// const HelloWorld = (props) => {
//     return <h1>Hello, {props.asdf}</h1>;
// }
// const style = {color: "red"}
const HelloWorld = props => 
<>
    <h1  className={styles.red}>Hello, {props.name}</h1>
    <h1 style={ {color: "red"} }>Hello, {props.name}</h1>
    <h1 style={ {color: props.color} }>From, Issa</h1>
</>


export default HelloWorld;