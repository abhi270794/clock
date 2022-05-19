import {useState,useEffect} from "react"
import './App.css';

function App() {
  var time =[];
   time = new Date().toLocaleTimeString();
   const [ctime,setCtime] = useState(time)
  
     setInterval(()=>{
      var time =[];
      time = new Date().toLocaleTimeString();
       setCtime(ctime)
     },1000)

   
  
  console.log(time)
  return (
    <div className="App">
       <h1>{time}</h1>
    </div>
  );
}

export default App;
