import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Axios from 'axios';
import './App.css';
import Admin from './Admin.js';
import Login from './Login';
import Home from './Home';
import User from './User';
import Judge from './Judge';
import List from './List';
import LeaderBoard from './LeaderBoard';
import Calendar from './Calendar';


function App() {
  // const [eventName, setEventName] = useState('');
  // const [participants, setParticipants] = useState(0);
  // const [src, setSrc] = useState('');

  // const [eventList, setEventList] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/read").then((response) => {
  //     setEventList(response.data);
  //   })
  // }, [])

  // const addToList = () => {
  //   Axios.post("http://localhost:3001/insert", {
  //     eventName: eventName, 
  //     participants: participants, 
  //     src: src,
  //   });
  // };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
        <Route path='/judge' element={<Judge />} />
        <Route path='/participants' element={<List />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
      
    </div>
    
    
    //{/* <h1>Event Management App</h1>

    //   <label>Event Name:</label>
    //   <input type="text" 
    //   onChange={(event) => {
    //     setEventName(event.target.value)
    //     }}
    //   />
    //   <label>No. Of Participants:</label>
    //   <input type="number" 
    //   onChange={(event) => { 
    //     setParticipants(event.target.value)
    //     }}
    //   />
    //   <label>Image:</label>
    //   <input type="text" 
    //   onChange={(event) => {
    //     setSrc(event.target.value)
    //     }}
    //   />

    //   <button onClick={addToList}>Add To List</button>

    //   <h1>Event List</h1>

    //   {eventList.map((val, key) => {
    //     return (
    //       <div className="row" key={key}>
    //         <img src={val.src} width={190} height={250} alt='event'/>
    //         <h1>{val.eventName}</h1>
    //         <h1>No. Of Participants: {val.noOfParticipants}</h1>
    //       </div>
    //     );
    //   })} */}
    //{/* // </div> */}
  );
}

export default App;
