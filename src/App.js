import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#e8e8e8'
  },
  box: {
    borderColor: '#cecdcd',
    minWidth: '200px',
    minHeight: '700px',
    backgroundColor: '#f9f9f9'
  },
  item: {
    minWidth: '50%',
    borderColor: '#cecdcd',
  },
  footer: {
    borderColor: '#cecdcd',
    minWidth: '200px',
    minHeight: '50px',
    backgroundColor: '#f9f9f9'
  }
}));

const App = () => {

  const [value, setValue] = React.useState(2);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <Grid container justify='center' alignItems="center" className={classes.root} spacing={2}>
      <Grid item xs={10}>
        <Box item display='flex' border={1} className={classes.box}>
          <Box borderRight={1} className={classes.item}>
            <Box margin={2}>
              <Box><b>Ethernet settings</b></Box>
              <Box>
                <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} column>
                  <Box>
                    <FormControlLabel
                      value="top"
                      control={<Radio color="primary" />}
                      label='Obtain an IP address automatically (DHCP/BootP)'
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      value="3"
                      control={<Radio color="primary" />}
                      label='Use the following address'
                    />
                  </Box>
                </RadioGroup>
              </Box>
            </Box>
          </Box>
          <Box className={classes.item}></Box>
        </Box>
        <Box item border={1} borderTop={0} className={classes.footer} ></Box>
      </Grid>
    </Grid>
  );
}

export default App;
