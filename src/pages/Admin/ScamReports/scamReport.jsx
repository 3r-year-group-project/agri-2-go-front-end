import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: '90%',
  color: theme.palette.text.primary,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function ScamReport() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container  spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography  color='black'>{message}<br/>name</Typography>
          </Grid>
          <Grid item >
          <Button color="secondary" variant="contained" sx={{
                         width: 'auto',fontSize: 16, backgroundColor: "#128C7E"}}>
                            VIEW PROFILE
                        </Button>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container  spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography  color='black'>Truncation should be conditionally applicable <br/>name</Typography>
          </Grid>
          <Grid item >
          <Button color="secondary" variant="contained" sx={{
                         width: 'auto',fontSize: 16, backgroundColor: "#128C7E"}}>
                            VIEW PROFILE
                        </Button>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container  spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography  color='black'>{message}</Typography>
          </Grid>
          <Grid item >
          <Button color="secondary" variant="contained" sx={{
                         width: 'auto',fontSize: 16, backgroundColor: "#128C7E"}}>
                            VIEW PROFILE
                        </Button>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
