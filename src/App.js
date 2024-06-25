import './App.css';
import Embed from 'react-runkit';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("");
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
  return (<div>
    <h1>{data}</h1>
    <Embed source={helloSource} />
  </div>
  );
}

export default App;
