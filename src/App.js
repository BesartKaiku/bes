import Axios from 'axios';
import Home from './compontents/Home.js';
import React from 'react';
import {useState, useEffect} from 'react';
import Product from './compontents/Product.js';
import OK from './compontents/OK.js';
import HeaderExampleContent from './compontents/SemanticButton.js';


function App() { 
 
  const [todos,setTodos] = useState();
  useEffect(()=>{
    Axios.get("http://192.168.1.181:1337/cars").then((res)=>{
    const responseTodos = res.data.cars;
    console.log(res.data.cars);
    setTodos(responseTodos);
  })
  },[]);
  
  return (
    <div>
      
      { todos && todos.map(todo => {
      const { id, make, year, model } = todo;
      return(
        <div>
        <ul> 

        <Product make={make} year={year} model={model} key={id}/>
        
        </ul>

        </div>
      
      )}) }
      <Home />
      <OK/>
    </div>
  );
}

export default App;
