import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField, Button, Switch, Typography, Container } from '@mui/material';
import Nav from './Nav';

function PolicyForm() {
    const [policyName, setPolicyName] = useState('');
  const [enableDisable, setEnableDisable] = useState(false);
  const [action, setAction] = useState('Allow');

  const handleEnableDisableChange = () => {
    setEnableDisable(!enableDisable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPolicy = { policyName, enableDisable, action };

    // Retrieve existing policies from local storage or initialize an empty array
    const existingPolicies = JSON.parse(localStorage.getItem('policies')) || [];

    // Add the new policy to the array
    existingPolicies.push(newPolicy);

    // Save the updated array back to local storage
    localStorage.setItem('policies', JSON.stringify(existingPolicies));

    // Reset form fields
    setPolicyName('');
    setEnableDisable(false);
    setAction('Allow');
  };

  return (
    <>
      <Nav />
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Policy Name"
            variant="outlined"
            fullWidth
            value={policyName}
            onChange={(e) => setPolicyName(e.target.value)}
          />
          <div>
            <Typography>Enable/Disable</Typography>
            <Switch
              color="primary"
              checked={enableDisable}
              onChange={handleEnableDisableChange}
            />
          </div>
          <div>
            <Typography>Action For Behavior Change</Typography>
            <RadioGroup
              value={action}
              onChange={(e) => setAction(e.target.value)}
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
      </Container>
    </>
  );
}

export default PolicyForm;
