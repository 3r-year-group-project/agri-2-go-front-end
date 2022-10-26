import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import axios from 'axios'

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

/**
 * Filter takes props 3 props.
 * 
 * @prop {string} id - id of the DOM element
 * @prop {string} lable - Lablel of the filter bar
 * @prop {Array} options - Array of objects with 'title' property as the filter options
 * example: options = [
    *          {title: "item1"}, 
    *          {title: "item2"},
    *          {title: "item3"}
    *          ...
 *          ]
 */

export default function   Filter(props) {

  const handleUpdateInput = async(inputValue)=>{
    const {data} = await axios.post('http://localhost:3002/api/wrc/order_list_status_filter',{status: inputValue})

    props.setOrderData(data.data)
  }
  return (
    <Autocomplete
      id={props.id}
      options={props.options}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      onInputChange={(event, newInputValue) => {
        handleUpdateInput(newInputValue)
      }}
      sx={{ color: 'white', borderRadius:"10px", width: props.width, bgcolor: 'white' }}
      renderInput={(params) => <TextField {...params} label={props.label} variant="filled" sx={{ input: { color: 'black' } }} />}
    />
  );
}