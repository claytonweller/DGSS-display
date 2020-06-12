import React from 'react';

export function Trolly({ moduleState }) {
  let display = null;
  if (moduleState.step === 'title') display = <h3>The Trolly Problem</h3>;

  return (
    <div>
      <div></div>
      {display}
    </div>
  );
}
