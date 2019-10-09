import React from 'react';
import NavHead from "./NavHead"
import './App.css';

function App() { 
  return (
  <div>
   <NavHead/>
    
  <h1>TONYS BLOG</h1>

  <h4>My team list</h4>

    <li>Emma</li>
    <li>NG</li>
    <li>Jacy</li>
    <li>Mike</li>
    <li>John</li>
  <h5>Enquiries on my Team </h5>

  <input></input>
  <button>Enter</button>
<a href="www.medium.com">click me</a>
    </div>
            
  );
}

export default App;



const myMove = <h1>I go</h1>;


const myTeam = {
  monday: <li>Come to sch</li>,
  tuesday: <li>go to Gym</li>,
  wednesday: <li>Sing away time</li>,
  thursday: <li>Take a ride</li>,
  friday: <li>chill out</li>
};


let myArticle = <article></article>;