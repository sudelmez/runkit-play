import './App.css';
import Embed from 'react-runkit';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState("");
  const nav = useNavigate();

  const getData = async () => {
    try {
      const res = await fetch("https://hellorunkit-onog2rtymt8o.runkit.sh", {
        method: 'GET',
      });
      const json = await res.json();
      setData(json.message);
      console.log("response:");
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [data])
  const helloSource = `console.log('Hello, world!')`
  return (<div className='App'>
    <h1>{data}</h1>
    <Embed source={helloSource} />
    <button className='button' onClick={() => { nav("/home"); }}>go to map</button>
  </div>
  );
}

export default App;
