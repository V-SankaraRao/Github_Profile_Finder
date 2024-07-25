import { useState,useEffect ,useRef} from 'react';
import './App.css';
import User from './User';
const url="https://api.github.com/users/";
function App() {
  const[currData,setCurrData]=useState(null);
  const name=useRef("tommy");


async function fetchdata(){
  const res=await fetch(`${url}${name.current.value}`);
  const data=await res.json();
  data&&setCurrData(data);
  console.log(data);

}
  useEffect(()=>{
  fetchdata();
  },[])
  return (
    <div className="App">
      <div className='in-data'>
        <input ref={name}type='text' />
        <button onClick={()=>fetchdata()}>Search</button>
      </div>
      {currData && <User user={currData}/>}
    </div>
  );
}

export default App;
