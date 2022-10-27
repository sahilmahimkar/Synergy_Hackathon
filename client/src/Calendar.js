import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import './Calendar.css'

function ReactCalendar() {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <Calendar showWeekNumbers onChange={onChange} value={date} />
            {console.log(date)}
            {date.toString()}
        </div>
    )
}

export default ReactCalendar