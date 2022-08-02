import { Button, requirePropFactory } from '@mui/material';
import { Fragment } from 'react';
import { Calendar,dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startofWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const locales = {
    "en-US" : require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })

  const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022,8,2),
        end : new Date(2022,8,2)
    },
    {
      title: "Welcome",
      allDay: true,
      start: new Date(2022,8,2),
      end : new Date(2022,8,3)
  },{
    title: "Big Meeting President",
    allDay: true,
    start: new Date(2022,8,3),
    end : new Date(2022,8,3)
}
  ]

export default function CalendarScedule(){



  const[newEvent,setNewEvent] = useState({title: "",start:"",end:""})
  const[allEvents,setAllEvents] = useState(events)
  
  function handleEvent(){
    setAllEvents([...allEvents, newEvent])
  }

    return(

      <>
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input type="text" placeholder='Add Title' style={{width: "20%" , marginRight: "10px"}}
        value = {newEvent.title} onChange = {(e) => setNewEvent({...newEvent,title:e.target.value})}
        />

        <DatePicker placeholderText='Start Date' style = {{marginRight: "10px"}}
        selected = {newEvent.start} onChange = {(start) => setNewEvent({...newEvent,start})}
        />

        <DatePicker placeholderText='End Date' style = {{marginRight: "10px"}}
        selected = {newEvent.end} onChange = {(end) => setNewEvent({...newEvent,end})}
        />

        <button style={{marginTop: "10px"}} onClick={handleEvent}>Add Event</button>
      </div>
      <Calendar localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}>

      </Calendar>
      </>
    );
  }