import React from 'react';

const PinInfo = ({ info: { clientName, consultants } }) => (
  <div>
    {clientName} |
    <ul>
      {consultants.map(consultant => (
        <li>{consultant.name}</li>
      ))}
    </ul>
  </div>
);

export default PinInfo;
