import React,{useState} from "react";
import './App.css';
const data=[
  {
    name:"Searchengine",
    url:["https://www.google.com/"]
  }
]
function App() {
  const [lists,setList]=useState(data);
  const opentabs=(url)=>{
    for (const link of url){
      window.open(link,"_blank");
    }

  }
  return (
    <div className="App">
      <h3>
      </h3>
      <div className="lists">
        {lists && lists.map((item)=>{
          return(
            <button className="button" onClick={()=>{opentabs(item.url)}}>{item.name}</button>
          )
        })}
        
      </div>
      
     
    </div>
  );
}

export default App;
