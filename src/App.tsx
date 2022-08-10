import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import img1 from "../assets/photo-base.png";
import React, { useState,useEffect } from 'react';
import { Container } from "./components/Container";



function App(props) {
 
  const [feeds, setFeed] = useState([])

  const onSubmitTest = (data) => {
    console.log(data)
    setFeed((oldState) => [...oldState, data] );
    
  }

  return (
    <div className="bg-[#343434] w-[1366px] h-full pb-[170px]">
       <Header />
       
       <Input onSubmitTest={onSubmitTest} />

       <h1 className="text-[#7a7a7a] ml-[426px]">Feed</h1>

      <Container feeds={feeds} /> 
  

    </div>
  );
}

export default App;
