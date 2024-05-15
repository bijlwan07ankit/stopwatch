import styles from "../Component/Watch.module.css"
import React from 'react';
import {useState , useEffect} from 'react';

export default function Watch(){
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] =useState(0)

const startStop = ()=>{
    setIsRunning(!isRunning)
}

const reset = () =>{
    setIsRunning(false)
    setElapsedTime(0)
}

const timeSetting = (sec) =>{
    let min = Math.floor(sec/60)
    let remSec =sec%60
    return `${min}:${remSec <10 ?"0" : ""}${remSec}`
}
useEffect(()=>{
    let intervalId
    if (isRunning){
        intervalId = setInterval(()=>{
            setElapsedTime((prevElapsedTime)=>prevElapsedTime+1)
        },1000);
    }
    else{
        clearInterval(intervalId)
    }
    return ()=> clearInterval(intervalId)
        },[isRunning])
    
    return (
        <div className={styles.parent}>
            <h1>Stopwatch</h1>
            <p>Time: {timeSetting(elapsedTime)}</p>
            <button onClick={startStop}>
             {isRunning ? "Stop" :"Start"}
            </button>

            <button onClick={reset} className={styles.buttonSpace}>
                Reset
            </button>
        </div>
    )
}