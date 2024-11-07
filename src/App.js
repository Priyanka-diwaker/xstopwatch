
import { useEffect,useState } from 'react';
import './App.css';

function App() {

  const[time,setTime]=useState(0);
const[running,setRunning]=useState(false);

useEffect(() => {
  let interval;
  if(running){
    interval=setInterval(() => {
      setTime((prevTime)=>prevTime+1);
      }, 1000);
      }else{
        clearInterval(interval);
        }
        return () => clearInterval(interval);
        }, [running]);
        
          
        const formatTime=(seconds)=>{
    const minutes= Math.floor(seconds/60);
    const  remainingSeconds=(seconds%60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  
  }
  return (
    <div className="App">
    <h1>Stopwatch</h1>
    
    <p>Time:{formatTime(time)}</p>
    <div>
      {running?(
   <button onClick={()=>{setRunning(false)}}>Stop</button>
      ):(
   <button onClick={()=>{setRunning(true)}}>Start</button>
      )
    }
    <button onClick={() => { setTime(0)}}>Reset</button>
    </div>
    </div>
  );
}

export default App;
