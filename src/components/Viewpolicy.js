import React from 'react';
import { Container, Typography } from '@mui/material';
import Nav from './Nav';

function Viewpolicy() {
  // Retrieve data from local storage
  const policies = JSON.parse(localStorage.getItem('policies'));
  return (
    <div>
      <Nav />
      <Container>
        <Typography variant="h4" component="h1" align="center">
          View Policies
        </Typography>
        <div>
          {policies && policies.length > 0 ? (
            policies.map((policy, index) => (
              <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <p>Policy Name: {policy.policyName}</p>
                <p>Enable/Disable: {policy.enableDisable ? 'Enabled' : 'Disabled'}</p>
                <p>Action For Behavior Change: {policy.action}</p>
              </div>
            ))
          ) : (
            <p>No policy data found.</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Viewpolicy;
