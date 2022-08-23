import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Cards(props) {
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <br/>
      <Typography component="p" variant="h4" >
        {props.value}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {props.date}
      </Typography>
      <div>
        <Link color="#128C7E" href='#' onClick={preventDefault}>
          {props.linkname}
        </Link>
      </div>
    </React.Fragment>
  );
}