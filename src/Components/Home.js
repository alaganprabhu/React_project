import React  from "react";
import Banner from "./Banner"

export default function Home(){
    return <><div className='App-header'>
      <h1>
        We <span>Design</span> Your <span>Space</span>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce finibus nisl neque, nec lobortis magna commodo in.</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        register
      </a>
      
    </div>
    <div>
    <Banner />
  </div></>
    
    
}