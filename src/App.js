
import React from "react";
import './App.css';
import Entry from "./enter";
import List from "./day6";
import Class from "./day7";
import Day8 from "./day8";
import Albums from "./sample";
import Singers from "./sample1";
import NavBar from "./sample2";
import Home from "./sample3";
import {Route,Routes} from 'react-router-dom';
import Login from "./Login";

function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

function App() {
  return (
    <div>
    <h2>Day6</h2>
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
      <h3>Day7</h3>
      <Class/>
      <h1>Day8</h1>
      <Day8/>
      <h2>Day10</h2>
      <Login/>
      <h2>Day9</h2>
      <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;

