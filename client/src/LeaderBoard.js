import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './LeaderBoard.css';
import { Link } from 'react-router-dom';

function LeaderBoard() {
    const [rank, setRank] = useState(1);
    const [pointList, setPointList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/readpoints").then((response) => {
            setPointList(response.data);
        })
      }, [])

    return (
        <div className='table'>
                <h1>CRCE Transylvania LeaderBoard</h1>
                {pointList.map((val, key) => {
                    return (
                    <div className='cards'>
                        <div className="checkoutProduct__user leaderboard-box" key={key}>
                            {/* <h1 id='space'>{rank}</h1> */}
                            
                            <h1 id='space'>Name: <span className='white'>{val.participantName}</span></h1>
                        
                            <h1 id='space'>Roll No: <span className='white'>{val.participantRoll}</span></h1>

                            <h1 id='space'>Roll No: <span className='white'>{val.participantPoints}</span></h1>
                        </div>
                    </div>
                        
                    );
                })}
            </div>
    )
}

export default LeaderBoard