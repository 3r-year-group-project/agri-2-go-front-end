import { Button, requirePropFactory, TextField, Typography } from '@mui/material';
import { Fragment } from 'react';
import { Calendar,dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startofWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Box from "@mui/material/Box";

const locales = {
    "en-US" : require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    // startOfWeek,
    getDay,
    locales
  })

  const events = [
    {
        title: "Carrot Stock from Nuwara Eliya",
        allDay: true,
        start: new Date(2022,8,2),
        end : new Date(2022,8,2)
    },
    {
      title: "Tomato stock from Pattipola",
      allDay: true,
      start: new Date(2022,8,2),
      end : new Date(2022,8,3)
  },{
    title: "Potato stock from Ella",
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
      <Box>

      
      
      <Calendar localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800, margin: "50px" , color:"black" , background: 'rgba(37, 211, 102, 0.2)' }}>

      </Calendar>
      </Box>
      </>
    );
  }