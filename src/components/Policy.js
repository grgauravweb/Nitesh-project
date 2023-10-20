import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField, Button, Switch, Typography } from '@mui/material';
import Nav from './Nav';

export default function Policy() {
  return (
        <div>
            <Nav/>
            <br/>
            <form style={{marginLeft:'30px'}}>
      <TextField
        label="Policy Name"
        variant="outlined"
        fullWidth
      /><br/><br/><br/>
      <TextField
        label="Location Configuration"
        variant="outlined"
        fullWidth
      />
      <div>
        <Typography>Enable/Disable</Typography>
        <Switch
          color="primary"
        />
      </div>
      <div>
        <Typography>Action For Behavior Change</Typography>
        <RadioGroup
        >
          <FormControlLabel value="Allow" control={<Radio />} label="Allow" />
          <FormControlLabel value="Deny" control={<Radio />} label="Deny" />
          <FormControlLabel value="Challenge" control={<Radio />} label="Challenge" />
        </RadioGroup>
      </div>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
        </div>
  )
}
