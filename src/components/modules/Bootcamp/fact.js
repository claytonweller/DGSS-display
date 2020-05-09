import React from 'react';

export function BootcampFact({ factData }) {
  const { response, attendee_name } = factData;

  const fact = factData.data.question.display.replace('_NAME_', attendee_name).replace('_RESPONSE_', response);
  return (
    <div>
      <h4>FACT</h4>
      <div>{fact}</div>
    </div>
  );
}
